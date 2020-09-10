import React from 'react'
import BooksList from './BooksList'
import PropTypes from 'prop-types'

function BooksShelf(props) {
    const { books, title, onChangeBookShelf } = props

    const handleBookShelfChange = (book, shelf) => {
        onChangeBookShelf(book, shelf)
    }

    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
            <BooksList
                books={books}
                onChangeBookShelf={handleBookShelfChange}
            />
            </div>
        </div>
    )
}

BooksShelf.propTypes = {
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    onChangeBookShelf: PropTypes.func.isRequired
}

export default BooksShelf