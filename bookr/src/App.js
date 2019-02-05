import React, { Component } from 'react';
import './App.css';

import Book from './components/Book';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {

  render() {
    return (
      <div className="App">
      <SearchBar />
      <h1>INTO THE<span> BOOK</span></h1>
      <Book />
        
      </div>
    );
  }
}

export default App;
