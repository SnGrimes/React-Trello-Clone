import React from 'react';
import { shallow} from 'enzyme'
import List from '../components/list';

describe('List', () => {
  const listTitle = 'Test1';
  const props = {key: listTitle, listTitle: listTitle};
  const list = shallow(<List {...props}/>);
  const mockAddCard = jest.fn();
    jest.mock('../components/list', () => {
    return jest.fn().mockImplementation(() => {
    return {addCard : mockAddCard};
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
  describe('when clicking the `newCard`', () => {
    beforeEach(() => {
      list.find('.list__new-card').simulate('click');      
    });
    
    it('calls the `list__new-card` button', () => {
      expect(mockAddCard).toHaveBeenCalled;
    });
    
  });

});