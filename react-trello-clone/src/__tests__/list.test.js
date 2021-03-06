import React from 'react';
import { shallow, mount} from 'enzyme'
import List from '../components/list';
import AddCard from '../components/addCard';

describe('List', () => {
  const listTitle = 'Test1';
  const props = {key: listTitle, listTitle: listTitle};
  const list = shallow(<List {...props}/>);
  const mockAddCard = jest.fn();
  const mockShowForm = jest.fn();
  jest.mock('../components/list', () => {
    return jest.fn().mockImplementation(() => {
      return {addCard : mockAddCard, showForm: mockShowForm};
    });
  });
  
 
  it('renders correctly', () => {
    expect(list).toMatchSnapshot();
  });
  it('receives the props', () => {
    expect(list.instance().props.listTitle).toEqual(listTitle);
  });
  it('initializes `state` with an empty card array', () => {
    expect(list.state().cards).toEqual([]);
  });
  it('initializes `state` with newCard to false', () => {
    expect(list.state().newCard).toEqual(false);
  });
  it('initializes `state` with changeTitle to false', () => {
    expect(list.state().changeTitle).toEqual(false);
  });
  describe('when clicking the `newCard`', () => {
    const cardDesc = 'This is a card.';
    beforeEach(() => {
      list.find('.list__new-card_button').simulate('click');      
    });
    it('calls `showForm` function on click', () => {
      expect(list.state().newCard).toEqual(true);
    });
  // describe('when clicking the list title', () => {
  //   beforeEach(() => {
  //     list.find('h5 .list__title').simulate('click');
  //   });
    
  //   it('changes changeTitle in`state` to true', () => {
  //     expect(list.state().changeTitle).toEqual(true);
  //   });
  // }); //changing list title describe block
    
  }); // click new card describe block
}); // List component describe block