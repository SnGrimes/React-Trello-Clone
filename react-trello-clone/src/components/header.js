import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  constructor(props){
    super(props);
    const plus = require('../img/plus.svg');
    const info = require('../img/info.svg');
    const bell = require('../img/bell.svg');
    const user = require('../img/user.svg');
    const layers = require('../img/layers.svg');
    this.state = {
      plus: plus,
      info: info,
      bell: bell,
      user: user,
      layers: layers
    }
  }
  render() {
    return (
      <header className="header__homeBar grid-x grid-padding-x">
        <div className="top-bar-left">
          <ul className="menu horizontal">
              <li id="boards"><button className="button header__buttons"><span><img src={this.state.layers} alt="layers icon" /></span> Boards</button></li>
              <li><input type="text" name="search" size="30" className=" header__search-bar"/></li>
          </ul>
        </div>
          <div className="auto cell text-center"><h2 className="header__title">Yello</h2></div>
          <div className="top-bar-right">
              <ul className="menu horizontal expanded">
                  <li><button className="button header__buttons"><img src={this.state.plus} alt="plus icon" /></button></li>
                  <li><button className="button header__buttons"><img src={this.state.info} alt="info icon"/></button></li>
                  <li><button className="button header__buttons"><img src={this.state.bell} alt="bell icon"/></button></li>
                  <li><button className="button header__buttons"><img src={this.state.user} alt="user icon" /></button></li>
              </ul>
          </div>
      </header>
    );
  }
}

export default Header;