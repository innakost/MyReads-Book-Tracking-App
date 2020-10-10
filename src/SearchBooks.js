import React, { Component } from 'react'
import SearchBar from './SearchBar'
import BooksList from './BooksList'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types';

class SearchBooks extends Component {

    static propTypes = {
        onChangeBookShelf: PropTypes.func.isRequired
    }

    state = {
        filteredBooks: []
    }

    handleBookChange = (book, shelf) => {
        this.props.onChangeBookShelf(book, shelf)
    }

    onSearch = (query) => {
        query === '' ?
        this.setState({
            filteredBooks: []
        }) :
        BooksAPI.search(query)
        .then(filteredBooks => {
            filteredBooks.error ? 
            this.setState({
                filteredBooks: []
            }) :
            this.setState(() => ({
                filteredBooks: filteredBooks.map(searchBook => {
                    let result = this.props.books.find(shelfBook => shelfBook.id === searchBook.id)
                    searchBook.shelf = result ? result.shelf : 'none'
                    return searchBook
                })
            }))
        })
    }    

    render() {
        const { filteredBooks } = this.state
        return (
            <div className="search-books">
                <SearchBar
                    onSearch={this.onSearch}
                />
                <div className="search-books-results">
                    <BooksList
                        books={filteredBooks}
                        onChangeBookShelf={this.handleBookChange}
                    />
                </div>
            </div>
        )
    }
}

export default SearchBooks