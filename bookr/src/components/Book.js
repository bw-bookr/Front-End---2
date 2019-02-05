import React from 'react';


const Book = props => {
  return (
    <div className="Book">
      <h2>BOOK IMAGE HERE</h2>
      <h3>TITLE: {props.title}</h3>
      <p>AUTHOR: {props.author}</p>
      <button>Click for Description</button>

    </div>
  );
};


export default Book;