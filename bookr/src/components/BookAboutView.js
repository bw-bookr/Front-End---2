import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

import ModalThing from './Modal';

import './Book.css';

const BookAboutView = (props) => {
  return (
    <div className="BookPage">
      <Card>

        <div className="bookImage">
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        </div>
        
        <CardBody>

          
          <CardTitle>
          <div className="bookTitle">
            Book Title
            </div>
            </CardTitle>

          <CardSubtitle>
            <div className="authorName">
            Author
            </div>
            </CardSubtitle>

          
          <CardText>
            <div className="aboutBook">
            Some quick example text to build on the card title and make up the bulk of the card's content.
            </div>
            </CardText>

          {/* <Button>Button</Button> */}

          <div className="modal">
          <ModalThing />
          </div>

        </CardBody>
      </Card>
    </div>
  );
};

export default BookAboutView;



// import React from 'react';
// import BookAbout from './BookAbout';


// const BookAboutView = props => {

//   return (

//     <div>

//       {props.dummyData.map (banana=> 
//       <BookAbout key={banana.imageUrl} post={banana} />)}

//     </div>

//   );
// };

// export default BookAboutView;