import React from 'react'
import PropTypes from 'prop-types'

function Book(props) {
    
    const { title, authors, shelf } = props.book
    const image = props.book.imageLinks && props.book.imageLinks.thumbnail  

    const handleChange = (event) => {
        props.onChangeBookShelf(props.book, event.target.value)
    }
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${image})` }}></div>
                    <div className="book-shelf-changer">
                    <select value={shelf} onChange={handleChange}>
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

    Book.propTypes = {
        book: PropTypes.object.isRequired,
        onChangeBookShelf: PropTypes.func.isRequired
    }

export default Book