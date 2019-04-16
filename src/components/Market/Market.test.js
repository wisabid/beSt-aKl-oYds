import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Market from './Market';

jest.mock('../../context/UserContext');

describe('<Counter />', () => {
  //const mdata = JSON.parse('[{"type":"MARKET_DATA","data":{"marketId":93649849,"eventId":21249939,"name":"Both Score No Draw","displayOrder":-32496,"type":"standard","status":{"active":true,"resulted":false,"cashoutable":false,"displayable":true,"suspended":false,"noExtraTime":false,"live":true},"liabilities":{"livePriceLimit":2500},"spAvail":false,"outcomes":[367530493,367530501]}},{"type":"MARKET_DATA","data":{"marketId":93649179,"eventId":21249939,"name":"Both Teams To Score","displayOrder":-32499,"type":"standard","status":{"active":true,"resulted":false,"cashoutable":true,"displayable":true,"suspended":false,"noExtraTime":false,"live":true},"liabilities":{"livePriceLimit":2500},"spAvail":false,"outcomes":[367528211,367528215]}},{"type":"MARKET_DATA","data":{"marketId":93649150,"eventId":21249939,"name":"Away Team Clean Sheet","displayOrder":-32018,"type":"standard","status":{"active":true,"resulted":false,"cashoutable":false,"displayable":true,"suspended":false,"noExtraTime":false,"live":true},"liabilities":{"livePriceLimit":1000},"spAvail":false,"outcomes":[367528121,367528125]}},{"type":"MARKET_DATA","data":{"marketId":93649398,"eventId":21249939,"name":"Home Team Clean Sheet","displayOrder":-32019,"type":"standard","status":{"active":true,"resulted":false,"cashoutable":false,"displayable":true,"suspended":true,"noExtraTime":false,"live":true},"liabilities":{"livePriceLimit":1000},"spAvail":false,"outcomes":[367528987,367528997]}},{"type":"MARKET_DATA","data":{"marketId":93649188,"eventId":21249939,"name":"Correct Score","displayOrder":-32498,"type":"correct-score","status":{"active":true,"resulted":false,"cashoutable":true,"displayable":true,"suspended":true,"noExtraTime":false,"live":true},"liabilities":{"livePriceLimit":5000},"spAvail":false,"outcomes":[367528229,367528236,367528242,367528247,367528256,367528260,367528267,367528271,367528277,367528281,367528288,367528296,367528301,367528305,367528309,367528314,367528319,367528322,367528327,367528331,367528334,367528340,367528344,367528349,367528355,368052632,368052633,368078338,368078339,368078340,368078341]}},{"type":"MARKET_DATA","data":{"marketId":93649223,"eventId":21249939,"name":"Double Chance","displayOrder":-32497,"type":"standard","status":{"active":true,"resulted":false,"cashoutable":true,"displayable":true,"suspended":false,"noExtraTime":false,"live":true},"liabilities":{"livePriceLimit":2500},"spAvail":false,"outcomes":[367528381,367528386,367528390]}},{"type":"MARKET_DATA","data":{"marketId":93649220,"eventId":21249939,"name":"Draw No Bet","displayOrder":-32550,"type":"standard","status":{"active":true,"resulted":false,"cashoutable":false,"displayable":true,"suspended":false,"noExtraTime":false,"live":true},"liabilities":{"livePriceLimit":2000},"spAvail":false,"outcomes":[367528365,367528370]}},{"type":"MARKET_DATA","data":{"marketId":93649155,"eventId":21249939,"name":"Away Team Exact Number of Goals","displayOrder":-32015,"type":"standard","status":{"active":true,"resulted":false,"cashoutable":false,"displayable":true,"suspended":true,"noExtraTime":false,"live":true},"liabilities":{"livePriceLimit":2000},"spAvail":false,"outcomes":[367528136,367528140,367528143,367528149,367528156,367528160,367528163,368052623]}},{"type":"MARKET_DATA","data":{"marketId":93649228,"eventId":21249939,"name":"Exact Number Of Goals","displayOrder":-32017,"type":"standard","status":{"active":true,"resulted":false,"cashoutable":false,"displayable":true,"suspended":false,"noExtraTime":false,"live":true},"liabilities":{"livePriceLimit":2000},"spAvail":false,"outcomes":[367528401,367528406,367528411,367528416,367528420,367528425,367528429,367528436,367528442,368052634,368078342]}},{"type":"MARKET_DATA","data":{"marketId":93649407,"eventId":21249939,"name":"Home Team Exact Number of Goals","displayOrder":-32016,"type":"standard","status":{"active":true,"resulted":false,"cashoutable":false,"displayable":true,"suspended":false,"noExtraTime":false,"live":true},"liabilities":{"livePriceLimit":1000},"spAvail":false,"outcomes":[367529014,367529020,367529026,367529037,367529042,367529050,367529060]}}]');

  const MarketComp = shallow(<Market mdata={[]} pmarket="true"/>)

  it('<Market /> renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Market />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('<Market /> component matches the snapshot', () => {
    expect(MarketComp).toMatchSnapshot();
  })

  it('<Market /> component displays the primary market', () => {
    //expect(MarketComp.find('.primary-market')).toHaveLength(1);
  })

});
