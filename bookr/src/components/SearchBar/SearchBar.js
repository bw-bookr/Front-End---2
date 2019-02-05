import React from 'react';
import './SearchBar.css';


const SearchBars = props => {

      return (

        <div className="SearchBar">


        <div className="logoImage">HOME</div>

        {/* <div className="instaSearchbar">B</div> */}

        <div className="search"><input type="text" placeholder="Search" onKeyPress={props.searchPosts}/></div>
       
    

        <div className="icons">

        <i class="far fa-compass"></i>
        <i class="far fa-heart"></i>
        <i class="fab fa-instagram"></i>
        <i class="far fa-user"></i></div>
         
        </div>

      );
    
  }
  
  export default SearchBars;