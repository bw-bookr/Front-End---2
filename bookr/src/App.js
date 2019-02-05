import React, { Component } from 'react';
import './App.css';

import Book from './components/Book';

class App extends Component {

  render() {
    return (
      <div className="App">
      <h1>BOOK LIST</h1>
      <Book />
        
      </div>
    );
  }
}

export default App;
