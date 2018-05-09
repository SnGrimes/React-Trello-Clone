import React, { Component } from 'react';
import List from './list';
import AddList from './addList';
import './board.css';

class BoardBody extends Component {
  constructor(props){
    super(props);
    this.addList = this.addList.bind(this);
    this.showForm = this.showForm.bind(this);
    this.cancelList = this.cancelList.bind(this);
    this.state = {
      lists: [],
      newList: false
    }
  }
  /** @function addList
   * Function to add a new list object to the array of objects that is displayed
   * on the board.
   * @param {string} name - The name of the List component
   * @param {object} list - The list object
   * @param {array} cards - The list of cards in this List  
   */
  addList(title) {
    this.setState((prevState) => {
      return {
        lists: prevState.lists.concat({
          title: title,
          cards: []
        })
      };  
    });
  }
  /**
   * 
   * @param {boolean} value - receives the value from the AddList component to 
   * change state item newList back to false.
   */
  cancelList(value) {
    this.setState({newList: value});
  }
  /** @function showForm
   * This function toggles the newList state variable.
   * @param {boolean} newList - Controls the visibility of the new list form.
   */
  showForm() {
    this.setState(prevState => ({
      newList: !prevState.newList
    }));
  }
  render() {
    return(
      <div id="boardBody" className="grid-container full">
        
        <div className="grid-x grid-margin-x small-offset-0">
        <div className="cell small-2 small-offset-0">
          {this.state.newList ? <AddList cancelList={this.cancelList} addList={this.addList} /> : <button className="new-list__button cell small-6" onClick={this.showForm}>Add a list...</button> }   
        </div>
        {this.state.lists.map(
          (list, index) => (
            <List 
              key={list.title}
              listTitle={list.title}
            />
          )
        )}  
        </div>
      </div>
    );
  }
}


export default BoardBody;