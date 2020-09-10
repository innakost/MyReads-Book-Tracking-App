import React, { Component } from 'react'
import SearchBar from './SearchBar'
import BooksList from './BooksList'
import * as BooksAPI from './BooksAPI'
import PropTypes from "prop-types";

class SearchBooks extends Component {

    static propTypes = {
        onClick: PropTypes.func.isRequired,
        onChangeBookShelf: PropTypes.func.isRequired
    }

    state = {
        filteredBooks: []
    }

    handleBookChange = (book, shelf) => {
        // console.log(`in search books :${book} and ${shelf}`)
        this.props.onChangeBookShelf(book, shelf)
    }

    onSearch = (query) => {
        if (query !== '') {
            BooksAPI.search(query)
            .then(filteredBooks => {
                this.setState(() => ({
                    filteredBooks: filteredBooks.map(searchBook => {
                        this.props.books.map(shelfBook => {
                            // console.log(`shelfBook.id = ${shelfBook.id} and searchBook.id = ${searchBook.id}` )
                            console.log(searchBook.id === shelfBook.id)
                            return searchBook.id === shelfBook.id ?
                            searchBook.shelf = shelfBook.shelf :
                            searchBook.shelf = 'none'
                        })
                        return searchBook
                    })
                }))
            })
        }
        // this.setState({
        //     filteredBooks: []
        // })
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
                        onChangeBookShelf={this.handleBookChange}
                    />
                </div>
            </div>
        )
    }
}

export default SearchBooks