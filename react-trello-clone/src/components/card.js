import React, { Component } from 'react';
import Modal from 'react-modal';

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    color: '#000'
  }
};


Modal.setAppElement('#root');

class Card extends Component {
  constructor(props){
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      desc: '',
      labels: [],
      icons: [],
      listId: this.props.listId,
      modalIsOpen: false
    }
  }

  openModal(){
    this.setState({modalIsOpen: true});
  }
  
  closeModal() {
    this.setState({modalIsOpen: false});
    console.log(`Closing the modal...`);
  }
  render() {
    return (
      <div className="list-card" >
      <button className="list-card__button" onClick={this.openModal}>
        <h5 className="list-card__title">{this.props.cardTitle}</h5>
        <p>(id:{this.props.id})</p>
        <p>(list id:{this.props.listId})</p>
      </button>
         <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Card Modal"
          style={modalStyles}
          shouldCloseOnOverlayClick={true}
          closeTimeoutMS={200}
        >
        <h2>Card Body</h2>
        <button className="button" onClick={this.closeModal}>Close</button>
        <div>Description: </div>
        </Modal>
      </div>
    );
  }
}

export default Card;