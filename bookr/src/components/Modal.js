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

  render() {
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}>&times;</button>;
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>
          <ModalHeader>Delete Book</ModalHeader>
          <ModalBody>
            <b>Are you sure you want to delete this book?</b>
            <br />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Delete Book</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalThing;



// import React from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// import './Book.css';

// class ModalThing extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       modal: false
//     };

//     this.toggle = this.toggle.bind(this);
//   }

//   toggle() {
//     this.setState(prevState => ({
//       modal: !prevState.modal
//     }));
//   }

//   render() {
//     return (
//       <div>

//         <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>

//         <div  className="modalPopUp">
//         <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
//           <ModalHeader toggle={this.toggle}>Delete book</ModalHeader>
//           <ModalBody>
//             Are you sure you want to delete this book from the book list?
//           </ModalBody>
//           <ModalFooter>
//             <Button color="primary" onClick={this.toggle}>Delete Book</Button>{' '}
//             <Button color="secondary" onClick={this.toggle}>Cancel</Button>
//           </ModalFooter>
//         </Modal>
//         </div>

//       </div>
//     );
//   }
// }

// export default ModalThing;