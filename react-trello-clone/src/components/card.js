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
      <div className="list-card">
        <h5 className="list-card__title">{this.props.cardTitle}</h5>
        <p>(id:{this.props.id})</p>
        <p>(list id:{this.props.listId})</p>
      </div>
    );
  }
}

export default Card;