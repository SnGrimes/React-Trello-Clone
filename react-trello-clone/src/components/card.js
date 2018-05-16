import React, { Component } from 'react';

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
      desc: '',
      labels: [],
      icons: []
    }
  }
  render() {
    return (
      <div className="list-card">
        <h5 className="list-card__title">{this.props.cardTitle}</h5>
      </div>
    );
  }
}

export default Card;