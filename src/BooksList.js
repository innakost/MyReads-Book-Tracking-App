import React from 'react'
import Book from './Book'

function BooksList(props) {

    const { books, onChangeBookShelf } = props

    const handleBookShelfChange = (book, shelf) => {
        onChangeBookShelf(book, shelf)
    }

    return (
        <ol className="books-grid">
        {books && books.length > 0 && books.map((book, index) => (
            <li key={index}>
            <Book
                id={book.id}
                shelf={book.shelf}
                image={book.imageLinks && book.imageLinks.thumbnail}
                title={book.title}
                authors={book.authors}
                onChangeBookShelf={handleBookShelfChange}
            />
            </li>
        ))}
        </ol>
        )
}

export default BooksList