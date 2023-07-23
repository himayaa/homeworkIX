import './App.css';
import { useState, useEffect } from 'react';
import { Book } from './models/book';

import 'bootstrap/dist/css/bootstrap.min.css';
import BookForm from './components/BookForm';
import BookTable from './components/BookTable';

function App() {
  const [books, setBooks] = useState([]);
  const [bookToEdit, setBookToEdit] = useState(null);


  // Make your own effects...?
  useEffect(() => {
    loadBooksFromLocalStorage();
  }, []);

  // Label this as an effect and customize input
  useEffect(() => {
    saveBooksToLocalStorage();
  }, [books]);

  // When you add a book, set it to default null and add it to the end of books array
  function onBookCreated(book) {
    setBookToEdit(null);
    setBooks([...books, book]);
  }

  // When you delete a book, sort through books until you find a matching isbn
  function onBookDelete(book) {
    setBooks(books.filter((x) => x.isbn !== book.isbn));
  }

  // when you edit a book, sort through until you find matching isbn
  function onBookEdit(book) {
    setBookToEdit(book);
    setBooks(books.filter((x) => x.isbn !== book.isbn));
  }

  // save to local... set a json item. 
  function saveBooksToLocalStorage() {
    const json = JSON.stringify(books);
    localStorage.setItem('books', json);
  }

  // read json by parsing it back. if things exist, save that into the bookArr 
  function loadBooksFromLocalStorage() {
    const json = localStorage.getItem('books');
    if (json) {
      const bookArr = JSON.parse(json);
      if (bookArr.length) {
        setBooks(bookArr.map((x) => Book.fromJSON(x)));
      }
    }
  }

  // return structure and special capabilities of imports
  return (
    <div className="m-5">
      <div className="card p-4">
        <BookForm onBookCreated={onBookCreated} bookToEdit={bookToEdit} />
        <BookTable
          books={books}
          onBookDelete={onBookDelete}
          onBookEdit={onBookEdit}
        />
      </div>
    </div>
  );
}

export default App;
