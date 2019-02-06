import React from 'react';


const Book = props => {
  return (
    <div className="Book">
      <h3>TITLE: {props.title}</h3>
      <p>AUTHOR: {props.author}</p>
      <button>Click for Description</button>

    </div>
  );
};

Book.defaultProps = {
    title: '',
    author: ''
  };


export default Book;