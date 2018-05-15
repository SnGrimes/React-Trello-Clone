import React, { Component } from 'react';

class AddList extends Component {
  constructor(props){
    super(props);
    this.cancelAdd = this.cancelAdd.bind(this);
    this.createList = this.createList.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: ''
    }
  }
  /** @function cancelAdd
   * This function is called when the user wants to prevent the creation of a new list
   * @param event - used with preventDefault to prevent page refresh.
   * Calls the cancelList function that is called 
   * from BoardBody to switch the template for new list creation back to the default.
   */
  cancelAdd(event){
    event.preventDefault();
    this.props.cancelList(false);  
  }
  /**
   * @function createList
   * @param {event} event - used with preventDefault to prevent page refresh.
   * Calls the addList function that is called from BoardBody to switch the template
   * for new list creation to true;
   */
  createList(event){
    event.preventDefault();
    this.props.addList(this.state.value);
  }
  /**
   * @function handleChange
   * @param {event} event - this function is called to switch between the different 
   * templates for new list creation.
   */
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    return (
      <div className="list__add cell small-3">
        <form  onSubmit={this.createList}>
            <input type="text" name="listName" value={this.state.value} onChange={this.handleChange} size="30" placeholder="Add a list..."/>
            <button className="list__button-submit success button small" type="submit">Save</button>
            <button className="list__x" onClick={this.cancelAdd}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
        </form>
      </div>
    );
  }
}

export default AddList;