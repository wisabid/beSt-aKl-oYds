import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Login from './Login';
//import UserContext from '../context/UserContext'

jest.mock('../../context/UserContext');

describe('<Login />', () => {
    const LoginComp = shallow(<Login />);

    
    it('<Login /> Component should match the snapshot', () => {
        // const LoginComp = mount(<Login />);   
        expect(LoginComp).toMatchSnapshot();
        // LoginComp.unmount()
    })
    
})