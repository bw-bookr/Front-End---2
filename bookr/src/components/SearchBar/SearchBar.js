import React from 'react';
import './SearchBar.css';


const SearchBars = props => {

      return (

        <div className="SearchBar">


        <div className="logoImage">
        <a href="http://localhost:3001">
        <i className="fas fa-home"></i>
        </a>
        </div>

        <div className="search"><input type="text" placeholder="Search" onKeyPress={props.searchPosts}/></div>
       
    

        <div className="icons">

        <i className="far fa-compass"></i>
        <i className="far fa-heart"></i>
        <i className="fab fa-instagram"></i>
        <i className="far fa-user"></i></div>
         
        </div>

      );
    
  }
  
  export default SearchBars;