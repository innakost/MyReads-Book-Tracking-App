import React, { Component } from 'react'

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
                <button className="close-search" onClick={this.props.onClick}>Close</button>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.handleOnChange} />
                </div>
            </div>
        )
    }
}

export default SearchBar