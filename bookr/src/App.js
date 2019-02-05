import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom';

import Book from './components/Book';
import Books from './components/Books';

import SearchBar from './components/SearchBar/SearchBar';

import Authenticate from "./components/Authenticate";
import Login from './components/Login';
import BookAboutView from './components/BookAboutView';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    axios
    .get('http://localhost:8000/api/book-collection/')
    .then(response => {
      this.setState({ books: response.data })
    })
    .catch(err => console.log(err));
  }

  deleteBook = id => {
    axios
    .delete(`http://localhost:8000/api/book-collection/${id}`)
    .then(response => {
      this.setState({ books: response.data })
    })
    .catch(err => console.log(err))
  }


  render() {
    return (
      <div className="App">
      <SearchBar />
      <h1>BOOK<span>R</span></h1>
      <LoginView />

      <Route 
      exact path='/'
      render={props => (
        <Books 
        books={this.state.books} />
      )} />

      <BookAboutView />

      </div>
    );
  }
}

const LoginView = Authenticate(Book)(Login);

export default App;
