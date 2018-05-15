import React from 'react';
import { shallow} from 'enzyme'
import Card from '../components/card';

describe('Card', () => {
  const description = 'This is the card description';
  const labels = ['start', 'stop', 'closed'];
  const props = {desc: description};
  const icons = [false, false, false, false];
  const card = shallow(<Card {...props}/>);
  
  it('renders correctly', () => {
    expect(card).toMatchSnapshot();
  });
  it('initializes `state` with an empty desc variable', () => {
    expect(card.state().desc).toEqual('');
  });
  it('initializes `state` with an empty label array', () => {
    expect(card.state().labels).toEqual([]);
  });
  it('initializes `state` with an empy icons array', () => {
    expect(card.state().icons).toEqual([]);
  });
  it('receives the props', () => {
    expect(card.instance().props.desc).toEqual(description);
  });
}); //Card component describe block