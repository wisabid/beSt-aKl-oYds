import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Subscription from './Subscription';

jest.mock('../../context/UserContext');

describe('<Subscription />', () => {
  const SubscriptionComp = shallow(<Subscription subscriptions={[]} uid="1234" />)
  it('<Subscription /> renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Subscription subscriptions={[]} uid="1234"/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('<Subscription /> component matches the snapshot', () => {
    expect(SubscriptionComp).toMatchSnapshot();
  })

  

});
