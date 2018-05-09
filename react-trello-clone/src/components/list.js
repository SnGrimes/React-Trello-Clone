import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <div className="cell small-2 small-offset-0 list">
        <h1>{this.props.listTitle}</h1>
        <button>Add Card</button>
      </div>
    );
  }
}

export default List;