import React from 'react'
import Book from './Book'
// import PropTypes from 'prop-types'

function BooksList(props) {

    const { books } = props

    const handleBookShelfChange = (book, shelf) => {
        props.onChangeBookShelf(book, shelf)
    }

    return (
        <ol className="books-grid">
        {books && books.length > 0 && books.map((book, index) => (
            <li key={index}>
                <Book
                    book={book}
                    onChangeBookShelf={handleBookShelfChange}
                />
            </li>
        ))}
        </ol>
        )
}

export default BooksList