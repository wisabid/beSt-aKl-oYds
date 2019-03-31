import React from 'react';
import { shallow } from 'enzyme';
import { InputEl, ButtonEl } from './FormElement';

describe('<FormElement />', () => {
    const InputElComp = shallow(<InputEl legend="Name" elname="username" eltype="text" elplaceholder="Enter your Name"/>);
    const ButtonComp = shallow(<ButtonEl elvalue="Go" />);
    it('<InputEl /> should match the snapshot', () => {
        expect(InputElComp).toMatchSnapshot();
    })

    it('<ButtonEl /> should match the snapshot', () => {
        expect(ButtonComp).toMatchSnapshot();
    })
})