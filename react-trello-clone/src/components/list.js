import React, { Component } from 'react';
import AddCard from './addCard';
import Card from './card';

class List extends Component {
  constructor(props){
    super(props);
    this.addCard = this.addCard.bind(this);
    this.showForm = this.showForm.bind(this);
    this.cancelCard = this.cancelCard.bind(this);
    this.state = {
      cards: [],
      newCard: false
    }
  }
  /**
   * @function addCard
   * @param {string} description - description/name of the card 
   */
  addCard(description) {
    this.setState((prevState) => {
      return {
        cards: prevState.cards.concat({
          description: description
        }),
        newCard: false
      }
    });
  }

  cancelCard(value) {
    this.setState({newCard: value});
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
          <h5 className="list__title cell auto" >{this.props.listTitle}</h5>
          <button className="cell small-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal">
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
          </button>
        </div>
        {this.state.cards.map(
          (card, index) => (
            <Card
              key={card.description}
              cardTitle={card.description}
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