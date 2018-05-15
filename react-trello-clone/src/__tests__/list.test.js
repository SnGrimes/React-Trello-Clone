import React from 'react';
import { shallow} from 'enzyme'
import List from '../components/list';

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
  describe('when clicking the `newCard`', () => {
    const cardDesc = 'This is a card.';
    beforeEach(() => {
      list.find('.list__new-card').simulate('click');      
    });
    it('calls `showForm` function on click', () => {
      expect(list.state().newCard).toEqual(true);
    });
    
  }); // click new card describe block

}); // List component describe block