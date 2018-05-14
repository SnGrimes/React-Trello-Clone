import React, { Component } from 'react';

class List extends Component {
  constructor(props){
    super(props);
    this.addCard = this.addCard.bind(this);
    this.state = {
      cards: []
    }
  }

  addCard() {
    console.log('Add card was called');
  }
  render() {
    return (
      <div className="cell small-3 small-offset-0 list">
        <h5>{this.props.listTitle}</h5>
        <button className="list__new-card button small" onClick={this.addCard}>Add Card</button>
      </div>
    );
  }
}

export default List;