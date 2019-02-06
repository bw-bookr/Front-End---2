import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
// import { Route, NavLink } from 'react-router-dom';
import { NavLink, Route, withRouter} from 'react-router-dom';

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
      books: [],
      loggedIn: false
    };
  }

  componentDidMount() {
    if (localStorage.getItem('jwt')) {this.setState({loggedIn: true})}
    axios
    .get('https://bookr-app-backend.herokuapp.com/api/book-collection')
    .then(response => {
      this.setState({ books: response.data })
    })
    .catch(err => console.log(err));
  }

  updateBooks(params) {
    this.setState({ books: params })
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
    console.log(this.state.loggedIn);
    return (
      <div className="App">
      <SearchBar />



      <div className="navLink">

      <NavLink exact to='/'>
      <h1>BOOK<span>R</span></h1>
      </NavLink>
      
      <NavLink to={`/bookabout/${this.props.id}`}>
      ABOUT BOOK
      </NavLink>
      </div>

      
      {/* <LoginView /> */}
      {/* <h1>BOOK<span>R</span></h1> */}

      <Route exact path='/' component={Login}/>

      <Route path='/books' component={props => (
        <Books 
      books={this.state.books} /> )} />

      {/* <Route 
      exact path='/books'
      render={props => (
        <Books 
        books={this.state.books} />
      )} /> */}

      <Route
      path={`/bookabout/:id`}
      render={props => (
       
        <BookAboutView  {...props} /> 
      )} />

      {/* <Route
      path='/login'
      render={props => (
        <LoginView /> 
      )} /> */} 

      </div>
    );
  }
}

const LoginView = Authenticate(Books)(Login);

export default withRouter(App);

// export default App;
