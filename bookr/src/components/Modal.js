import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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

//   deleteItem = (e, index) => {
//     e.preventDefault();
//     this.props.deleteItem(index)
// }

  render() {
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}>&times;</button>;
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}Delete Book</Button>

        <div className="modal">
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>
          <ModalHeader>Delete Book</ModalHeader>
          <ModalBody>
            <b>Are you sure you want to delete this book?</b>
            <br />
          </ModalBody>
          <ModalFooter>
              <div className="modalButtons">
            {/* <Button color="primary" onClick={e => this.deleteItem(e, index)} key={index}>
            Delete Book</Button>{' '} */}
            <Button color="primary" onClick={this.toggle}>Delete Book</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </div>

          </ModalFooter>
        </Modal>
        </div>
      </div>
    );
  }
}

export default ModalThing;