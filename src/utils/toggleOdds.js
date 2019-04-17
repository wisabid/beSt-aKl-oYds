import React from 'react';
import UserContext from '../context/UserContext'

const translate = (props) => {
    // static contextType = UserContext;
    
    let newprops = {...props};
    return newprops;
}

export default (wrappedOutcome) => {
    return function wrappedRender(props) {
        return wrappedOutcome(translate(props));
    }
}