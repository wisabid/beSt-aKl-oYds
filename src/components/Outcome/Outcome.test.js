import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Outcome from './Outcome';

jest.mock('../../context/UserContext');

describe('<Outcome />', () => {
  //const OutcomeComp = shallow(<Outcome />)

  it('<Outcome /> renders without crashing', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<Outcome outcomedata={[]}/>, div);
    // ReactDOM.unmountComponentAtNode(div);
  });

  it('<Outcome /> component matches the snapshot', () => {
    //expect(OutcomeComp).toMatchSnapshot();
  })

});
