import React, { Component } from 'react';
import Modal from 'react-modal';
import './card.css';

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    color: '#000',
    backgroundColor: '#edeff0',
    width: '750px'
  }
};


Modal.setAppElement('#root');

class Card extends Component {
  constructor(props){
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.changeDesc = this.changeDesc.bind(this);
    this.cancelDescChange = this.cancelDescChange.bind(this);
    this.titleClick = this.titleClick.bind(this);
    this.descClick = this.descClick.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.state = {
      desc: '',
      labels: [],
      icons: [],
      listId: this.props.listId,
      modalIsOpen: false,
      changeDesc: false,
      changeTitle: false,
      newTitle: '',
      newDesc: ''
    }
  }
  /**
   * @function changeDesc
   * @param {event}
   * Will replace the value of desc with the value of newDesc and will changeDesc back to false.
   */
  changeDesc(event) {
    event.preventDefault();
    this.setState({desc: this.state.newDesc,
                   changeDesc: false
    });
  }
   /**
   * @function handleDescChange
   * @param {event}
   * Will handle the toggle between the changeDesc state.
   */
  handleDescChange(event) {
    this.setState({newDesc: event.target.value});
  }
  /**
   * @function cancelDescChange
   * Will cancel the description field change by changing changeDesc back to false.
   */
  cancelDescChange() {
    this.setState({changeDesc:false});
  }
  handleTitleChange(event) {
    this.props.changeCardTitle(this.state.newDesc, this.state.desc);
  }
  /**
   * @function titleClick
   * This function will toggle the changeTitle state to true/false which will cause the 
   * card-modal__title textarea to appear so the user can change the description of the card.
   */
  titleClick() {
    this.setState((prevState) => {
      return {
        changeTitle: !prevState.changeTitle
      }
    });
  }
  descClick() {
    this.setState((prevState) => {
      return {
        changeDesc: !prevState.changeDesc
      }
    });
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
        <div className="grid-y card-modal">
          <div className="cell grid-x">
            <h2 className="cell small-4 medium-12 large-11"><span>Icon</span>{this.props.cardTitle}</h2>
            <button className="button clear cell small-1" onClick={this.closeModal}>X</button>

          </div>
          <div className="cell medium-6">
            <p>in list <a className="card-modal__link" href="#">{this.props.listTitle}</a></p>  
          </div>
          <div className="cell small-4 medium-8 large-6 grid-x grid-margin-x">
            <div className="cell small-6 medium-8 large-9">
              <div className="cell">
                <h5>Description</h5>
                {this.state.changeDesc ? 
                <form onSubmit={this.changeDesc}>
                  <textarea cols="80" rows="4" onChange={this.handleDescChange} defaultValue={this.state.desc}></textarea>
                  <button className="button success" type="submit">Save</button>
                  <button className="button clear" onClick={this.cancelDescChange}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </form>
                  :
                  <textarea cols="80" rows="5" placeholder="Add a more detailed description..." defaultValue={this.state.desc} onClick={this.descClick}></textarea> }
              </div>
              <div className="cell"><h5>Attachments</h5><div className="card-modal__attach">Drag and drop or <a className="card-modal__link" href="#">choose your files</a></div></div>
              <div className="cell"><h5>Add Comment</h5><textarea name="" id="" cols="80" rows="5"></textarea><button className="button">Save</button></div>
              <div className="cell grid-x"><h5 className="cell medium-10">Activity</h5><a className="card-modal__link" href="#">Hide Details</a></div>
            </div>
            <div className="cell small-2 medium-3 grid-y card-modal__side-buttons">
              <h5>Add</h5>
              <button className="button">Members</button>
              <button className="button">Labels</button>
              <button className="button">Checklist</button>
              <button className="button">Due Date</button>
              <button className="button">Attachment</button>
              <h5>Actions</h5>
              <button className="button">Move</button>
              <button className="button">Copy</button>
              <button className="button">Watch</button>
              <button className="button">Archive</button>
            </div>
            
          </div>
        </div>
        </Modal>
      </div>
    );
  }
}

export default Card;