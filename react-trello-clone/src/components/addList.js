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
   * @param event - function receives the event object to prevent page from
   * being refreshed when clicked.
   */
  cancelAdd(event){
    event.preventDefault();
    /** calls the cancelList function that is called from BoardBody to switch the template
     * for new list creation.
     */   
    this.props.cancelList(false);  
  }
  createList(event){
    event.preventDefault();
    this.props.addList(this.state.value);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    return (
      <div className="list_add cell small-6">
        <form  onSubmit={this.createList}>
            <input type="text" name="listName" value={this.state.value} onChange={this.handleChange} size="30" placeholder="Add a list..."/>
            <button className="success button" type="submit">Save</button>
            <button onClick={this.cancelAdd}>
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

//<button onClick={this.cancelAdd}><object aria-label="Cancel" type="image/svg+xml" data={this.state.x} alt="x icon" className="cancel"></object></button>