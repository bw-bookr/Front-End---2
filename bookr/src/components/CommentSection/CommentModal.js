import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CommentInput from './CommentInput';

class ModalThing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  comSubmit = e => {
    e.preventDefault();
    this.props.handleCommentSubmit();
   }

  render() {
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} 
    onClick={this.toggle}>&times;</button>;
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}input</Button>

        <div className="modal">

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>

          <ModalHeader>input</ModalHeader>
          <ModalBody>

              <CommentInput
              comment={this.props.comment}
              submitComment={this.handleCommentSubmit}
              changeComment={this.props.commentsHandler}
              changeRating={this.props.ratingHandler}
              rating={this.props.rating}
              />
            

          </ModalBody>
          <ModalFooter>
              <div className="modalButtons">
            

            {/* <Button 
            // onClick={() => this.props.history.delete(`/bookabout/${book.id}`)}
            color="primary" onClick={this.toggle}>input</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button> */}
            </div>

          </ModalFooter>
        </Modal>
        </div>
      </div>
    );
  }
}

export default ModalThing;