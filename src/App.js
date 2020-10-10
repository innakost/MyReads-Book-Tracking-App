import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import { Link, Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then(books => this.setState({
      books
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
    return (
      <div className="app">
        <Route path='/search' render={() => (
          <SearchBooks
            books={this.state.books}
            onClick={this.handleOnClick}
            onChangeBookShelf={this.onChangeBookShelf}
          />
      )} />
        <Route exact path='/' render={() => (
          <div>
            <ListBooks 
              books={this.state.books}
              onChangeBookShelf={this.onChangeBookShelf}
            />
            <div className="open-search">
              <Link to='/search'>
                <button>Add a book</button>
              </Link>
            </div>  
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
