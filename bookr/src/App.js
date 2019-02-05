import React, { Component } from 'react';
import './App.css';

import Book from './components/Book';
import SearchBar from './components/SearchBar/SearchBar';

import Authenticate from "./components/Authenticate";
import Login from './components/Login';

class App extends Component {

  render() {
    return (
      <div className="App">
      <SearchBar />
      <h1>INTO THE<span> BOOK</span></h1>
      <LoginView />
      {/* <Book /> */}
        
      </div>
    );
  }
}

const LoginView = Authenticate(Book)(Login);

export default App;
