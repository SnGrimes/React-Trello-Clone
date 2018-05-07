import React, { Component } from 'react';
import './board.css';

class BoardBody extends Component {
  constructor(props){
    super(props);
    this.addList = this.addList.bind(this);
    this.showFOrm = this.showForm.bind(this);
    this.state = {
      lists: []
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
      lists: prevState.lists.concat({
        title: title,
        cards: []
      })
    });
  }
  showForm() {
    alert('Show Form');
  }
  render() {
    return(
      <div id="boardBody" class="grid-x grid-margin-x">
        <ul class="grid-x grid-margin-x">
            
        </ul>
        <div class="new-list__button is-idle">
          <a href="" onClick={this.showForm}>Add a list...</a>
        </div>
      </div>
    );
  }
}

export default BoardBody;