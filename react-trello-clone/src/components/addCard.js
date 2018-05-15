import React, { Component } from 'react';

class AddCard extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.createCard = this.createCard.bind(this);
    this.cancelAdd = this.cancelAdd.bind(this);
    this.state = {
      value: ''
    }
  }
    /** @function cancelAdd
   * This function is called when the user wants to prevent the creation of a new card
   * @param event - used with preventDefault to prevent page refresh. 
   * Calls the cancelCard function that is called 
   * from List to switch the template for new card creation back to the default.
   */
  cancelAdd(event) {
    event.preventDefault();
    this.props.cancelCard(false);
  }
   /**
   * @function createCard
   * @param {event} event - used with preventDefault to prevent page refresh.
   * Calls the addCard function that is called from List to switch the template
   * for new list creation to true;
   */
  createCard(event){
    event.preventDefault();
    this.props.addCard(this.state.value);
  }
    /**
   * @function handleChange
   * @param {event} event - this function is called to switch between the different 
   * templates for new card creation.
   */
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    return (
      <div>
        <form className="new-card__form" onSubmit={this.createCard}>
        <input className="new-card__desc-input"type="text" name="cardName" value={this.state.value} onChange={this.handleChange} size="30" />
        <button className="new-card__button" type="submit">Save</button>
        <button className="new-card__x" onClick={this.cancelAdd}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
        </button>
        </form>
      </div>
    );
  }
}

export default AddCard;