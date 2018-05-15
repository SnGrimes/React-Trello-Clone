import React from 'react';
import { shallow } from 'enzyme'
import AddList from '../components/addList';

  describe('AddList', () => {
    const mockCreate = jest.fn();
    const mockCancel = jest.fn(); 
    const mockAdd = jest.fn();
    const mockCanAdd = jest.fn();
    const props = {cancelList: mockCancel, addList: mockAdd};
    const addList = shallow(<AddList {...props}/>);

    it('renders correctly', () => {
      expect(addList).toMatchSnapshot();
    });
    it('initializes the `value` with an empty string', () => {
      expect(addList.state().value).toEqual('');
    });
    describe('when clicking the `list_button-submit` button', () => {
      const form = addList.find('form');
      beforeEach(() => {
        addList.find('.list__button-submit').simulate('click');
      });
      it('calls the onsubmit event', () => {
        form.simulate('submit', { preventDefault() {} });
      });

    }); // list_button-submit describe block
    // describe('when clicking the `x` button', () =>{
    //   beforeEach(() => {
    //     addList.find('.list_x').simulate('click');
    //   });
    //   it('calls the cancelAdd function', () => {
    //     expect(mockCancel).toBeCalled();
    //   });
    //}); // x button describe block

  }); // main AddList describe block
 