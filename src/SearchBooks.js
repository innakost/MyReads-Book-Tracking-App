import React, { Component } from 'react'
import SearchBar from './SearchBar'
import BooksList from './BooksList'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {

    state = {
        filteredBooks: []
    }

    onSearch = (query) => {
        console.log(query)
        if (query !== '') {
            BooksAPI.search(query)
            .then(filteredBooks => {
                this.setState(() => ({
                    filteredBooks
                }))
            })
        }
    }
    

    render() {
        const { onClick } = this.props
        const { filteredBooks } = this.state
        return (
            <div className="search-books">
                <SearchBar
                    onClick={onClick}
                    onSearch={this.onSearch}
                />
                <div className="search-books-results">
                    <BooksList
                    books={filteredBooks}
                    />
                </div>
            </div>
        )
    }
}

export default SearchBooks