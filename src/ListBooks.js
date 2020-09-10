import React from 'react'
import BooksShelf from './BooksShelf'
import PropTypes from 'prop-types'

function ListBooks(props) {

    const { books, onChangeBookShelf } = props

    const handleBookShelfChange = (book, shelf) => {
      onChangeBookShelf(book, shelf)
    }

    return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BooksShelf
                  title='Currently Reading'
                  books={books.filter(book => book.shelf === 'currentlyReading')}
                  onChangeBookShelf={onChangeBookShelf}
                />
                <BooksShelf
                  title='Want to Read'
                  books={books.filter(book => book.shelf === 'wantToRead')}
                  onChangeBookShelf={onChangeBookShelf}
                />
                <BooksShelf
                  title='Read'
                  books={books.filter(book => book.shelf === 'read')}
                  onChangeBookShelf={handleBookShelfChange}
                />
              </div>
            </div>
          </div>
    )
}

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeBookShelf: PropTypes.func.isRequired
}

export default ListBooks