import React, { Component } from 'react';

import Book from './Book';

class BookList extends Component {
  render() {
    return (
      <div className="booklist">
        <h1>Book List!</h1>
        <ul>
          {this.props.books.map(book => {
            return (
              <Book
                title={book.title}
                id={book.id}
                author={book.author}
                description={book.description}
                key={book.id}
              />

            );
          })}
        </ul>

      </div>
    );
  }
}

Book.defaultProps = {
 books: [],
};

export default BookList;