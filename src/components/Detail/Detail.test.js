import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Detail from './Detail';


describe('<Detail />', () => {
  const mockFn = jest.fn();
  const eventdata = JSON.parse('[{"eventId":21249939,"name":"Shanghai Shenhua 0 v 0 Shandong Luneng Taishan","displayOrder":-1000,"sort":"MTCH","linkedEventId":21228740,"classId":5,"className":"Football","typeId":10003971,"typeName":"Football Live","linkedEventTypeId":10005942,"linkedEventTypeName":"Chinese Super League","startTime":"2017-09-19T11:35:23.000Z","scores":{"home":0,"away":0},"competitors":[{"name":"Shanghai Shenhua","position":"home"},{"name":"Shandong Luneng Taishan","position":"away"}],"status":{"active":true,"started":true,"live":true,"resulted":false,"finished":false,"cashoutable":true,"displayable":true,"suspended":false,"requestabet":false},"boostCount":0,"superBoostCount":0,"markets":[93649849,93649179,93649150,93649398,93649188,93649223,93649220,93649155,93649228,93649407,93649353,93649361,93649370,93649381,93649390,93649836,93649129,93649564,93649573,93649583,93649590,93768039,93768040,93768041,93649441,93649446,93768043,93768042,93649168,93649424,93649173,93649433,93768044,93649453,93777894,93778183,93779542,93779756,93649749,93649757,93649780,93649795,93649800,93649809,93649817,93649824,93649262,93649267,93649291,93649299,93649138,93649305,93649735,93649343,93649461,93649239,93775332,93649253,93649258,93649320,93649328,93775316,93649764,93649772,93775328,93649859,93649468,93649475,93649486,93649493,93649500,93649508,93649514,93649524,93649532,93649540,93649547,93649556,93649334,93649603,93649613,93649621,93649630,93649637,93649646,93649651,93649662,93649670,93649679,93649688,93649694,93649700,93649709,93649720,93649727,93767577,93767578,93767579,93767580,93775322,93775323,93775324,93775325,93775326,93775327,93775333,93775334,93775335,93775336,93775337,93775338,93775339,93777094,93777375,93777385,93777503,93777682,93649785,93649830,93767581,93775329,93775330]}]');
  const DetailComp = shallow(<Detail eventdata={eventdata} goback={mockFn}/>);  

  it('<Detail /> renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Detail eventdata={[]}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('<Detail /> component matches the snapshot', () => {
    expect(DetailComp).toMatchSnapshot();
  })

  it('Detail should have a back button', () => {
    expect(DetailComp.find('.backbtn')).toHaveLength(1);
  })

  it('Back action click will call a function', () => {
    DetailComp.find('.backbtn').simulate('click');
    expect(mockFn).toHaveBeenCalled();
  })

  it('Detail Screen should display the event details within an li element', () => {
    expect(DetailComp.find('.detailScreen .eventLi')).toHaveLength(1);
  })

});
