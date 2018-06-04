import React from 'react';
import configureStore from 'redux-mock-store';

import Land from '../frontend/components/Land';

describe('>>> Land', () => {
  const initialState = {
    auth: {
      user: null,
      userType: null
    }
  };
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<Land store={store} />);
  });

  it('should have actual running tests that works :(');

  it('should render component', () => {
    // expect(wrapper.length).equal(1);
    // expect(wrapper.is('.Land')).to.equal(true);
  });

  it('should display "login"', () => {
    // expect(wrapper.find())
    // console.log(wrapper.debug());
    // console.log(wrapper.find('Host'));
    // expect(wrapper.find({ href: '/api/auth/google/get'})).to.have.length(1);
  });
});
