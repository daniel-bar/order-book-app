import React from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import OrderBook from './OrderBook';

configure({ adapter: new Adapter() });

describe('<OrderBook>', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <OrderBook></OrderBook>
    );
  });

  it('mounts without crashing', () => {
    wrapper.unmount();
  });
});
