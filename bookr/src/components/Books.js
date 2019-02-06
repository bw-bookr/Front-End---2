import React, { Component } from 'react';
import axios from 'axios';
import { Router } from 'react-router-dom';

import Book from './Book';
import { runInContext } from 'vm';
// import BookAboutView from './BookAboutView';

class Books extends Component {

    componentDidMount() {
        console.log(this.props.books);
        axios
    .get('https://bookr-app-backend.herokuapp.com/api/book-collection')
    .then(response => {
      this.setState({ books: response.data })
    })
    .catch(err => console.log(err));
    }

  render() {
    //   if (!this.props.books) return (<h1>Loading...</h1>)
    console.log(this.props.books);
    return (
      <div className="Books">
      
        <ul>
          {this.props.books.map(book => {
            return (
                <div>
                    {/* <Router
                    path={'/'} 
                    component={props => (
                        <Book
                        title={book.title}
                        id={book.id}
                        author={book.author}
                        description={book.description}
                        key={book.id} /> )}
                    
                    /> */}


              <Book
            //   onClick={() => this.props.history.push(`/bookabout/${book.id}`)}
                title={book.title}
                id={book.id}
                author={book.author}
                description={book.description}
                key={book.id}
              />

              {/* <BookAboutView
                title={book.title}
                id={book.id}
                author={book.author}
                description={book.description}
                key={book.id}
            />  */}
            </div>

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

export default Books;