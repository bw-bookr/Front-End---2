import React from 'react';
import { Link, Route, withRouter} from 'react-router-dom';


const Book = props => {
    console.log(props.id);
  return (
      <Link to={`/bookabout/${props.id}`}>
    <div 
    onClick={(event) => console.log(props.id, event)}
    className="Book">
      <h3>{props.title}</h3>
      <p>By: {props.author}</p>
      <p>{props.short_description}</p>
      <button>Click for More</button>

    </div>
    </Link>
  );
};

Book.defaultProps = {
    title: '',
    author: '',
    // id: ''
  };


export default Book;


// onClick={(props) => this.props.history.push(`/bookabout/${props.id}`)}