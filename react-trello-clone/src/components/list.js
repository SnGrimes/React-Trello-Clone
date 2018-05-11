import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <div className="cell small-3 small-offset-0 list">
        <h5>{this.props.listTitle}</h5>
        <button className="button small">Add Card</button>
      </div>
    );
  }
}

export default List;