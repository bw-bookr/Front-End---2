// import React from 'react';
// import { Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle, Button } from 'reactstrap';
  
// import styled from "styled-components";

// import { Link, Route, withRouter} from 'react-router-dom';

// const Book = (props) => {
//     console.log(props.id);
//   return (
//     <Link to={`/bookabout/${props.id}`}>
//     <div
//     onClick={(event) => console.log(props.id, event)}
//     className="Book">
//       <Card>
//         <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
//         <CardBody>
//           <CardTitle>{props.title}</CardTitle>
//           <CardSubtitle>By: {props.author}</CardSubtitle>
//           <CardText>{props.short_description}</CardText>
//           <Button>Click for More</Button>
//         </CardBody>
//       </Card>
//     </div>
//     </Link>
//   );
// };

// Book.defaultProps = {
//     title: '',
//     author: '',
//     id: '' 
// };

// export default Book;




import React from 'react';
import { Link, Route, withRouter} from 'react-router-dom';
import './Book.css';


const Book = props => {
    console.log(props.id);
  return (
      <Link to={`/bookabout/${props.id}`}>
    <div 
    onClick={(event) => console.log(props.id, event)}
    className="Book">
      <h3>{props.title}</h3>
      <p>By: {props.author}</p>
      <p>{props.short_description}</p>
      <button>Click for More</button>

    </div>
    </Link>
  );
};

Book.defaultProps = {
    title: '',
    author: '',
    // id: ''
  };


export default Book;


// onClick={(props) => this.props.history.push(`/bookabout/${props.id}`)}