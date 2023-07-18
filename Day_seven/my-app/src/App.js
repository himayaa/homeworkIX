import './App.css';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import BookForm from './components/BookForm';
import BookTable from './components/BookTable';

function App() {
  const [books, setBooks] = useState([]);
  const [bookToEdit, setBookToEdit] = useState(null);

  function onBookCreated(book) {
    //append book to books array
    setBooks([...books, book]);
  }

  function onBooksDelete(book) {
    // Remove from array
    setBooks(books.filter((x) => x.isbn !== book.isbn));
  }

  function onBookEdit(book) {
    setBookToEdit(book);
    setBooks(books.filter((x) => x.isbn !== book.isbn));
  }

  function saveBooksToLocalStorage() {
    const json = JSON.stringify(this.books);
    localStorage.setItem('books', json);
  }

  return (
    <div className="m-5">
      <div className="card p-4">
        <BookForm onBookCreated={onBookCreated} bookToEdit={bookToEdit}/>
        <BookTable books={books} onBookDelete={onBookDelete} onBookEdit={onBookEdit}/>
      </div>
    </div>
  );
}

export default App;