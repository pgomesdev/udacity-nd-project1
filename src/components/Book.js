import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Book = function bookComponent({ book, onShelfChange }) {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.smallThumbnail}")` }}></div>
          <div className="book-shelf-changer">
            <select
              onChange={(e) => onShelfChange(book, e.target.value)}
              value={book.shelf}
            >
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        {book.authors.map((author, index) => (<div key={index} className="book-authors">${author}</div>))}
      </div>
    </li>
  );
};

Book.propTypes ={
  book: PropTypes.object.isRequired,
  onShelfChange: PropTypes.func.isRequired,
};

export default Book;