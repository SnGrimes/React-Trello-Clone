import React from 'react';
import { shallow } from 'enzyme'
import List from '../components/list';

describe('List', () => {
  it('renders correctly', () => {
    expect(List).toMatchSnapshot();
  });
});