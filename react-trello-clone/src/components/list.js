import React, { Component } from 'react';
import AddCard from './addCard';

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
  addCard() {
    console.log('card');
  }

  cancelCard(value) {
    console.log(`cancel card: ${value}` );
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
      <div className="cell small-3 small-offset-0 list">
        <h5>{this.props.listTitle}</h5>
        <div>
          {this.state.newCard ? <AddCard addCard={this.addCard} cancelCard={this.cancelCard}/> : <button className="list__new-card button small" onClick={this.showForm}>Add a Card...</button>}
        </div>
      </div>
    );
  }
}

export default List;