import React, { Component } from 'react';
import Header from './components/header';
import BoardInfo from './components/boardInfo';
import BoardBody from './components/boardBody';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="grid-container fluid" >
        <Header />
        <BoardInfo />
        <BoardBody />
      </div>
    );
  }
}

export default App;
