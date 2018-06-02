import React, { Component } from 'react';

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
      desc: '',
      labels: [],
      icons: [],
      listId: this.props.listId
    }
  }
  render() {
    return (
      <button className="list-card" onClick={this.props.openModal}>
        <h5 className="list-card__title">{this.props.cardTitle}</h5>
        <p>(id:{this.props.id})</p>
        <p>(list id:{this.props.listId})</p>
      </button>
    );
  }
}

export default Card;