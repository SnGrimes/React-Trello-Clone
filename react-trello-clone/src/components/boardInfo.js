import React, { Component } from 'react';
import './board.css';

class BoardInfo extends Component {
  constructor(props){
    super(props);
    const star = require('../img/star.svg');
    const lock = require('../img/lock.svg');
    const horizontal = require('../img/more-horizontal.svg');
    this.state = {
      star: star,
      lock: lock,
      horizontal: horizontal
    }
  }
  render() {
    return (
      <div id="boardInfo" className="grid-x grid-padding-x">
        <ul className="menu horizontal board__menu large-10 cell">
            <li className="board__title"><a href="">Untitled board</a></li>
            <li><a href="">Personal</a></li>
            <li><a href=""><img src={this.state.star} width="15" alt="star icon"/></a></li>
            <li><a href=""><img src={this.state.lock} width="15" alt="lock icon"/> Private</a></li>
        </ul>
        <div className="large-2 cell menu">
            <span className="board__show-menu"><a href=""><img src={this.state.horizontal} alt="more horizontal icon" /> Show Menu</a></span>
        </div>
      </div>
    );
  }
}

export default BoardInfo;