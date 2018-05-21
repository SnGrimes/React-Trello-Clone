import React from 'react';
import { shallow} from 'enzyme'
import AddCard from '../components/addCard';

describe('addCard', () => {
  const mockAddCard = jest.fn();
  const mockCreateCard = jest.fn();
  const mockCancelCard = jest.fn();
  const props = {addCard: mockAddCard, cancelCard: mockCancelCard};
  const addCard = shallow(<AddCard {...props} />);
  jest.mock('../components/addCard', () => {
    return jest.fn().mockImplementation(() => {
      return {createCard: mockCreateCard };
    });
  });


  it('renders correctly', () => {
    expect(addCard).toMatchSnapshot();
  });
  it('initializes `state` with empty value', () => {
    expect(addCard.state().value).toEqual('');
  });
  describe('when typing into the card description input', () => {
    const description = 'This is a new card';
    beforeEach(() => {
      addCard.find('.new-card__desc-input').simulate('change', { target: { value: description}});
    });
    it('updates the description in `state`', () => {
      expect(addCard.state().value).toEqual(description);
    });
  }); //typing into card description input describe block
  describe('when clicking the `.new-card__button` button', () => {
    const fakeEvent = { preventDefault: () => console.log('preventDefault')};
    beforeEach(() => {
      addCard.find('.new-card__form').simulate('submit',fakeEvent);
    });
    it('the createCard function is called', () => { 
      expect(mockAddCard).toHaveBeenCalled();
    });
  }); // click new card button describe block
  describe('when clicking the `x` button', () => {
    const fakeEvent = { preventDefault: () => console.log('preventDefault')};
    beforeEach(() => {
      addCard.find('.new-card__x').simulate('click',fakeEvent);
    });
    it('cancels the creation of a new card', () => {
      expect(mockCancelCard).toHaveBeenCalledWith(false);
    });
  });
}); // addCard describe block
