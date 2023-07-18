import React from 'react';

export default function BookTable(props) {


    return (
    <div>
        <table className='table mt-5'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>ISBN</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody id='table-body'>
                {
                    // Loop through all book, for each book return a row
                    props.books.map((book) => {
                        // Add keys to lists for react to manage it
                        return <tr key={book.isbn}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.isbn}</td>
                            <td>
                                <button className='btn btn-danger me-1'
                                onClick={() => props.onBookDelete(book)}>Delete</button>
                                <button className='btn btn-warning ms-1'
                                onClick={() => props.onBookEdit(book)}>Edit</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
    );
}