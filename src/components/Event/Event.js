import React from 'react';
import Market from '../../containers/Market';
import Subscription from '../../containers/Subscription';
import soccer from '../../assets/images/Soccerball.svg';

const Event = (props) => {
    const { edata, showDetail, handlePM, showpmlist, pmarket, subscribe_event, subscriptions } = props;
    if (edata.length) {
        return (
            <fieldset className="outerf">
                <legend>Football Live</legend>
                    <ul className="noborder">
                        {
                            edata.map((evnt, index) => {
                                return (
                                    <li key={evnt.eventId}>
                                        <div className="inrow">
                                            <span className="anchorl" onClick={() => showDetail(evnt.eventId)}><b>{index+1}. </b>{evnt.name}</span>
                                            <span className="anchorl" onClick={() => handlePM(evnt)}>( * )</span>
                                        
                                        <Subscription 
                                            uid={`e.${evnt.eventId}`}
                                        />   
                                        </div>   
                                        
                                        {(showpmlist.indexOf(evnt.eventId) !== -1)
                                            ?<Market mdata={props.marketdata} eventid={evnt.eventId} pmarket={pmarket}/>
                                            :null
                                        }
                                         <hr />  
                                    </li>
                                )
                            }) 
                        }
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

export default Event;