import React from 'react';
import Market from '../../containers/Market'

const Event = (props) => {
    const { edata, showDetail, handlePM, showpmlist, pmarket } = props;
    if (edata.length) {
    return (
        <ul>
            {
                edata.map((evnt) => {
                    return (
                        <li key={evnt.eventId}>
                            -> <span onClick={() => showDetail(evnt.eventId)}><b>(E)</b>{evnt.name}</span> - <span onClick={() => handlePM(evnt)}>(PM)</span>
                            {(showpmlist.indexOf(evnt.eventId) !== -1)
                                ?<Market mdata={props.marketdata} eventid={evnt.eventId} pmarket={pmarket}/>
                                :null
                            }
                        
                        </li>
                    )
                }) 
            }
        </ul>
    )
    }
    else {
        return (
            <h4>Loading...</h4>
        )
    }
}

export default Event;