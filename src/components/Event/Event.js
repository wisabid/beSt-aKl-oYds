import React from 'react';
import soccer from '../../assets/images/Soccerball.svg';
import EventDetails from './EventDetails';
import PropTypes from 'prop-types';

function eventReducer(state, action) {
    return state;
}

const Event = (props) => {
    const { edata } = props;
    
    if (edata.length) {
        return (
            <fieldset className="outerf bao-football-live" style={{border:"none"}}>
                    <ul className="noborder">
                      <EventDetails {...props} />                               
                    </ul>
            </fieldset>
        )
    }
    else {
        return (
            <img src={soccer} className="bao-spinner" alt="logo" />  
        )
    }
}

Event.propTypes = {
    edata : PropTypes.array
}

export default Event;