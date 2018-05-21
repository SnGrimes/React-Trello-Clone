import React, { Component } from 'react';
import AddCard from './addCard';
import Card from './card';
import { max_number } from '../helper';

class List extends Component {
  constructor(props){
    super(props);
    this.addCard = this.addCard.bind(this);
    this.showForm = this.showForm.bind(this);
    this.cancelCard = this.cancelCard.bind(this);
    this.titleClick = this.titleClick.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.state = {
      cards: [],
      newCard: false,
      changeTitle: false,
      newTitle: ''
    }
  }
  /**
   * @function addCard
   * @param {string} description - description/name of the card 
   * Creates a new card witht the description as the value of the card
   */
  addCard(description) {
    this.setState((prevState) => {
      return {
        cards: prevState.cards.concat({
          id: max_number(this.state.cards.map(card => card.id)) +1,
          description: description
        }),
        newCard: false
      }
    });
  }
  /**
   * @function cancelCard
   * @param {boolean} value - false value
   * Will receive false to change the display of the addCard form
   */
  cancelCard(value) {
    this.setState({newCard: value});
  }
  /**
   * @function titleClick
   * This function will toggle the changeTitle state to true/false which will cause the list__title textarea to appear so the user can change the title of the list.
   */
  titleClick() {
    this.setState((prevState) => {
      return {
        changeTitle: !prevState.changeTitle
      }
    });
  }
  /**
   * @function handleTitleChange
   * @param {event} 
   * This function will be called by the onChange handler to set the value of the newTitle state to the users new List title. It will then call the props.changeListTitle to change the List element's title on the boardBody compoenent
   */
  handleTitleChange(event) {
    this.setState({newTitle: event.target.value});
    this.props.changeListTitle(this.state.newTitle, this.props.listTitle);
  }

  showForm() {
    this.setState((prevState) => {
      return {
        newCard: !prevState.newCard
      }
    });
  }
  render() {
    return (
      <div className="cell small-2 small-offset-0 list">
        <div className="grid-x">
          {this.state.changeTitle ? <textarea className="list__title-edit" onBlur={this.titleClick} onChange={this.handleTitleChange} maxLength="100" defaultValue={this.props.listTitle}></textarea> :<h5 className="list__title cell auto" onClick={this.titleClick}>{this.props.listTitle}</h5>}
          <button className="cell small-2 button clear">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal">
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
          </button>
        </div>
        {this.state.cards.map(
          (card, index) => (
            <Card
              key={card.id}
              cardTitle={card.description}
              id={card.id}
              removeCard ={this.removeCard}
            />
          )
        )}
        <div className="list__new-card">
          {this.state.newCard ? <AddCard addCard={this.addCard} cancelCard={this.cancelCard}/> : <button className="list__new-card_button" onClick={this.showForm}>Add a Card...</button>}
        </div>
      </div>
    );
  }
}

export default List;