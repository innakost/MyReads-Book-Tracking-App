import React from 'react'
import BooksList from './BooksList'

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

export default BooksShelf