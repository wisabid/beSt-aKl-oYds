import React from 'react';
import Market from '../../containers/Market';
import Subscription from '../../containers/Subscription';
import { TYPE_NAME } from '../../store/constants/constants';
import PropTypes from 'prop-types';

const EventDetails = (props) => {
    const { edata, showDetail, handlePM, showpmlist, pmarket } = props;
    const e_data = edata[0][TYPE_NAME];
    
    const leagues = Object.keys(e_data);
    return (
        leagues.map((item, index) => {    
            let keyid = Date.now();        
            return (
                <fieldset key={`fsi_${keyid}_${index}`} className="bao-football-types">
                    <legend>{item === "undefined"?TYPE_NAME:item}</legend>
                    <ul className="noborder">
                    {e_data[item].map(evnt => {
                    return (
                        <li key={evnt.eventId}>
                            <div className="inrow">
                                <span className="anchorl titletext" onClick={() => showDetail(evnt.eventId)}>* {evnt.name}</span>
                                <span className="anchorl" onClick={() => handlePM(evnt, edata)}>( <b>+</b> )</span>
                                <button className="scores">{evnt.scores.home} - {evnt.scores.away}</button>
                            <Subscription 
                                uid={`e.${evnt.eventId}`}
                            />   
                            </div>   
                            <div className="" style={{fontSize: "1.4vmin"}}>
                                <span style={{fontWeight:"bold", color: "grey"}}>( {evnt.startTime} )</span>
                            </div>
                            {evnt.status.suspended
                                ?<div className="inrow odds" style={{justifyContent: "center", background:"lightgrey", color:"grey"}}>
                                    SUSPENDED
                                </div> 
                                :null
                            }
                            
                            {(showpmlist.indexOf(evnt.eventId) !== -1)
                                ?<Market mdata={props.marketdata} eventid={evnt.eventId} pmarket={pmarket} typename={item}/>
                                :null
                            }
                            <hr />  
                        </li>
                )
            })}
            </ul>
            </fieldset>
            )
        })
        
    )
}

Event.propTypes = {
    edata : PropTypes.array
}

export default EventDetails;