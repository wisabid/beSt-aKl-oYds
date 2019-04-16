import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Counter from './Counter';

describe('<Counter />', () => {
  const counterComp = shallow(<Counter betslipdata={[]} subscriptions={[]}/>);
  
  it('<Counter /> renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Counter betslipdata={[]} subscriptions={[]}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('<Counter /> component matches the snapshot', () => {
    expect(counterComp).toMatchSnapshot();
  })

  it('<Counter /> displays a count of outcomes added to betslip', () => {
    expect(counterComp.find('[title="Bet Slip"]')).toHaveLength(1);
  });

  it('<Counter /> displays a count of subscriptions', () => {
    expect(counterComp.find('[title="Subscriptions"]')).toHaveLength(1);
  });

});
