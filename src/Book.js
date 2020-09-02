import React, { Component } from 'react'
// import { func } from 'prop-types'

class Book extends Component {

    state = {
        value: this.props.shelf
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
        this.props.onChangeBookShelf(this.props.id, this.state.value)
    }

    render() {
        const { image, title, authors } = this.props
        return (
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${image})` }}></div>
                        <div className="book-shelf-changer">
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                        </div>
                    </div>
                    <div className="book-title">{title}</div>
                    <div className="book-authors">{authors}</div>
                </div>
        )
    }
}

export default Book