import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import MarketTypes from './MarketTypes';

jest.mock('../../context/UserContext');
const mockFn = jest.fn();

describe('<MarketTypes />', () => {

  const MarketTypesComp = shallow(<MarketTypes dta={[]} goback={mockFn} marketdata={[]}/>)

  

  it('<MarketTypes /> component matches the snapshot', () => {
    expect(MarketTypesComp).toMatchSnapshot();
  })

  it('Back action click will call a function', () => {
    MarketTypesComp.find('.backbtn').simulate('click');
    expect(mockFn).toHaveBeenCalled();
  })

  

});
