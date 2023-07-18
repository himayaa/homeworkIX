import React, {useState, useEffect} from 'react';

export default function BookForm(props) {

    //state variables
    const [title,setTitle] = useState('');
    const [author,setAuthor] = useState('');
    const [isbn,setIsbn] = useState('');


    // React hook, runs this when [] is updated
    useEffect(() => {
        if (props.bookToEdit) {
            setTitle(props.bookToEdit.title);
            setAuthor(props.bookToEdit.author);
            setIsbn(props.bookToEdit.isbn);
        }
    }, [props.bookToEdit]);

    function onBookFormSubmit(e) {
        e.preventDefault();

        if(!isValid()) { return; }
        let book = new Book(title, author, isbn);
        props.onBookCreated(book);
        clearInputs();
    }
    //=== checks for value and type
    function isValid() {
        return title !== '' && author !== '' && isbn !== '';
    }

    function clearInputs() {
        setTitle('');
        setAuthor('');
        setIsbn('');
    }

    return (
    <div>
        <hi>Library Books:</hi>
        <form id="form" onSubmit={onBookFormSubmit}>
            <div className = 'mb-3'>
                <label className='form-label'>Title</label>
                <input 
                id='title-input' 
                type='text' 
                className='form-control' 
                placeholder="Enter book Title"></input>
            </div>
            <div className = 'mb-3'>
                <label className='form-label'>Author</label>
                <input 
                id='author-input' 
                type='text' 
                className='form-control' 
                placeholder="Enter book Author"></input>
            </div>
            <div className = 'mb-3'>
                <label className='form-label'>ISBN</label>
                <input 
                id='isbn-input' 
                type='text' 
                className='form-control' 
                placeholder="Enter book ISBN"></input>
            </div>

            <div className='d-grid mt-4'>
                <button className='btn btn-outline-primary' type="submit">Add Book</button>
            </div>
        </form>
    </div>
    );
}