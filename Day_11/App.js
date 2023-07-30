//import taskpage, loginpage, registerpage, requireauth


function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        })
    }, []);

    return (
        <BrowserRouter>
            <Navbar user={user} />
            { isUserUpdated ? (
            <Routes>
                <Route
                path="/"
                element={
                    <RequireAuth user={user}>
                    <TaskPage />
                    </RequireAuth>
                }      
            ></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
            </Routes>
            ) : (
                <></>
            )}
        </BrowserRouter>
    );
}

export default App;