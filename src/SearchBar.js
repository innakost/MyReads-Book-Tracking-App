import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchBar extends Component {

    state = {
        query: '',
    }

    handleOnChange = ( event ) => {
        this.setState({
            query: event.target.value
        })
        this.props.onSearch(this.state.query)
        
    }

    render() {
        return (
            <div className="search-books-bar">
                <Link to="/">
                    <button className="close-search">Close</button>
                </Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.handleOnChange} />
                </div>
            </div>
        )
    }
}

export default SearchBar