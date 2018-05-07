import React, { Component } from 'react';

class List extends Component {
  constructor(props){
    super(props);
    const x = require('../img/x.svg');
    this.state = {
      x: x
    }
  }
  render() {
    return (
      <div>This is the lIst component</div>
    );
  }
}

export default List;