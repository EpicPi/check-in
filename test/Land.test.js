import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow, render, mount } from 'enzyme';
import { authInitial } from '../frontend/reducers';
import { mockUser as user } from './mockModels';
import { Land } from '../frontend/components/Land';

const requiredProps = overrides => ({
  ...authInitial,
  setUserType: () => {},
  resetUserType: () => {},
  ...overrides
});

describe('<Land />', () => {
  it('renders', () => {
    expect(() => {
      render(<Land {...requiredProps()} />);
    }).to.not.throw();
  });

  it('prompts to login when not logged in', () => {
    const wrapper = shallow(<Land {...requiredProps()} />);
    expect(wrapper.find('a')).to.have.lengthOf(1);
    expect(wrapper.find('button')).to.have.lengthOf(0);
    expect(wrapper.find('a').text()).to.be.eql('Log in!');
    expect(
      wrapper.find('a').filterWhere(item => {
        return item.prop('href') === '/api/auth/google/get';
      })
    ).to.have.lengthOf(1);
  });

  it('has two host/guest buttons when logged in', () => {
    const wrapper = shallow(<Land {...requiredProps({ user })} />);
    expect(wrapper.find('a')).to.have.lengthOf(0);
    expect(wrapper.find('button')).to.have.lengthOf(2);
    expect(
      wrapper.find('button').filterWhere(item => {
        return item.text() === 'Host';
      })
    ).to.have.lengthOf(1);
    expect(
      wrapper.find('button').filterWhere(item => {
        return item.text() === 'Guest';
      })
    ).to.have.lengthOf(1);
  });

  it('directs to `/host` when clicked on `Host` button', () => {
    const setUserType = sinon.spy();
    const wrapper = shallow(<Land {...requiredProps({ user, setUserType })} />);
    const hostButton = wrapper
      .find('button')
      .filterWhere(item => item.text() === 'Host');
    expect(hostButton).to.have.lengthOf(1);
    // TODO: how to mock Provider, error comes up from not providing `history`
    // hostButton.simulate('click');
    // expect(setUserType).to.have.callCount(1);
    // console.log('!!!', hostButton.props(), setUserType.callCount);
  });

  it('directs to `/guest` when clicked on `Guest` button');
});
