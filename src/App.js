import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then(books => this.setState({
      books
    }))
  }

  handleOnClick = () => {
    this.setState(currentState => ({
      showSearchPage: !currentState.showSearchPage
    }))
  }

  onChangeBookShelf = (book, shelf) => {
    const bookWithUpdatedShelf = book
    bookWithUpdatedShelf.shelf = shelf
    BooksAPI.update(book, shelf)
    .then(() => (
      this.setState(currentState => ({
        books: currentState.books.filter(b => {
          return b.id !== book.id
        }).concat(bookWithUpdatedShelf)
      }))
    ))
  }

  render() {
    console.log(this.state.books)
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks
            onClick={this.handleOnClick}
            books={this.state.books}
          />
        ) : (
          <div>
            <ListBooks 
              books={this.state.books}
              onChangeBookShelf={this.onChangeBookShelf}
            />
            <div className="open-search">
              <button onClick={this.handleOnClick}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
