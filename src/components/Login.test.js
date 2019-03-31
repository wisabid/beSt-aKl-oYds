import React from 'react';
import { shallow, mount } from 'enzyme';
import Login from './Login';
//import UserContext from '../context/UserContext'

jest.mock('../context/UserContext');

describe('<Login />', () => {
    

    it('<login /> Component should match the snapshot', () => {
        const loginComp = mount(<Login />);   
        expect(loginComp).toMatchSnapshot();
        loginComp.unmount()
    })

    it('<Login /> component should display the container element', () => {
        const loginComp = mount(<Login />);   
        expect(loginComp.find('.bao-container')).toHaveLength(1);
        loginComp.unmount()
    })

    it('<Login /> Component should render a soccerball image', () => {
        const loginComp = mount(<Login />);   
        // const loginComp = mount(<UserContext.Consumer>
        //     {context => (<Login />)}</UserContext.Consumer>);    
        expect(loginComp.find('img.bao-logo')).toHaveLength(1);
        loginComp.unmount()
    })


    // it('<Login /> Component should render a soccerball image', () => {
    //     const loginComp = mount(<Login />);  
    //     expect(loginComp.find('#AlfAlvin')).toHaveLength(1);
    //     loginComp.unmount()
    // })

})