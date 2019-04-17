import React from 'react';
import soccer from '../../assets/images/Soccerball.svg';
import EventDetails from './EventDetails';
import PropTypes from 'prop-types';



const Event = (props) => {
    const { edata } = props;
    
    if (edata.length) {
        let keyid = Date.now();
        return (
            <fieldset key={`fs_${keyid}`} className="outerf bao-football-live" style={{border:"none"}} >
                    <ul className="noborder" key={`ul_${keyid}`}>
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