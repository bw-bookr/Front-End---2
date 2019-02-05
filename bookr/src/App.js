import React, { Component } from 'react';
import './App.css';

import Book from './components/Book';

import SearchBar from './components/SearchBar/SearchBar';

import Authenticate from "./components/Authenticate";
import Login from './components/Login';
import BookAboutView from './components/BookAboutView';

class App extends Component {

  render() {
    return (
      <div className="App">
      <SearchBar />
      <h1>BOOK<span>R</span></h1>
      <LoginView />
      {/* <Book /> */}
      <BookAboutView />

      {/* <BookAboutView dummyData={this.state.filteredPosts.length > 0 ?
        this.state.filteredPosts :
        this.state.dummyData
        
      } */}
      {/* /> */}
      </div>
    );
  }
}

const LoginView = Authenticate(Book)(Login);

export default App;
