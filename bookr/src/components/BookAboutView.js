import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
  import axios from 'axios';
  import { Component } from 'react';

import ModalThing from './Modal';

import { NavLink, Router, withRouter} from 'react-router-dom';

import './Book.css';
import CommentSection from './CommentSection/CommentSection';

class BookAboutView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: [{title: null, author: null, description: null, image: null}],
      review: [],
      id: ''

    };
  }

  componentDidMount() {
    if (localStorage.getItem('jwt')) {this.setState({loggedIn: true})}
    axios
    .get('https://bookr-app-backend.herokuapp.com/api/book-collection')
    .then(response => {
      const id = this.props.match.params.id;
      console.log(id);
      const books = response.data;
      console.log(books);
      console.log(response.data);
      const book = books.filter(bk => {console.log(bk.id); console.log(typeof id); return bk.id === Number(id)})
      console.log(book)

      this.setState({ book, id }, () => {console.log(this.state);} )
    })
    .catch(err => console.log(err));
    const id = this.props.match.params.id;

  //   axios
  //   .get(`https://bookr-app-backend.herokuapp.com/api/book-review/book_review/${id}`)
  //   .then(response => {
  //     const reviews = response.data.reviews;
  //     console.log(reviews);

  //     this.setState({ reviews })
  //   })
  }


  updateBooks(params) {
    this.setState({ books: params })
  }

  render() {
  return (
    <div className="BookPage">
    <Card>

      <div className="bookImage">
      <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
      </div>

      <CardBody>

        
        <CardTitle>
        <div className="bookTitle">
        <h3>{this.state.book[0].title}</h3>
          </div>
          </CardTitle>

        <CardSubtitle>
          <div className="authorName">
          <p>By: {this.state.book[0].author}</p>
          </div>
          </CardSubtitle>

          <CardText>
          <div className="aboutBook">
          <p>{this.state.book[0].full_description}</p>
          </div>
          </CardText>
          <br></br>

          <CardText>
          <div className="aboutPub">
          <p>Published by {this.state.book[0].publisher} in {this.state.book[0].year}</p>
          </div>
          </CardText>

        <div className="modal">
        <ModalThing />
        </div> 

        <CommentSection
        id = {this.props.match.params.id}
        />

 </CardBody>
</Card>

    {/* <Router
    path={'/'}
    // path={`/${props.match.params}`}
    render={props => (

      <Card>

        <div className="bookImage">
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        </div>
        
        <CardBody>

          
          <CardTitle>
          <div className="bookTitle">
          <h3>TITLE: {props.title}</h3>
            </div>
            </CardTitle>

          <CardSubtitle>
            <div className="authorName">
            <p>AUTHOR: {props.author}</p>
            </div>
            </CardSubtitle>

          
          <CardText>
            <div className="aboutBook">
            <p>DESCRIPTION:: {props.description}</p>
            </div>
            </CardText>

          <div className="modal">
          <ModalThing />
          </div> */}

          {/* <CommentSection /> */}

        {/* </CardBody>
      </Card>
    )} /> */}

      


    </div>
  );}
};

export default BookAboutView;