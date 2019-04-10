import React from 'react';
import Market from '../../containers/Market';
import Subscription from '../../containers/Subscription';

const Event = (props) => {
    const { edata, showDetail, handlePM, showpmlist, pmarket, subscribe_event, subscriptions } = props;
    console.log('subscriptions', subscriptions)
    if (edata.length) {
    return (
        <fieldset>
                <legend>Event</legend>
        <ul className="noborder">
            {
                edata.map((evnt) => {
                    return (
                        <li key={evnt.eventId}>
                            -> <span onClick={() => showDetail(evnt.eventId)}><b>(E)</b>{evnt.name}</span> - <span onClick={() => handlePM(evnt)}>(PM) - </span>
                            
                            <Subscription 
                                uid={`e.${evnt.eventId}`}
                            />                         

                            
                            {(showpmlist.indexOf(evnt.eventId) !== -1)
                                ?<Market mdata={props.marketdata} eventid={evnt.eventId} pmarket={pmarket}/>
                                :null
                            }
                        
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
            <h4>Loading...</h4>
        )
    }
}

export default Event;