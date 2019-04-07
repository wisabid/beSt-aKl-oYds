import React from 'react';
import Outcome from '../Outcome'

const Market = (props) => {
    const { mdata, eventid, outcomedata, showOutcomOndemand } = props;
    return (
        <ul >
            {
                mdata.map((market) => {
                    if (market.data.eventId === eventid) {
                        return (
                            <>
                            <li>{market.data.marketId} - {market.data.name} <br />
                            - {market.data.type}   <br />                                
                            <Outcome odata={outcomedata} eventid={eventid} marketid={market.data.marketId} 
                                showOutcomOndemand={(id) => showOutcomOndemand(id)}
                                mdata={mdata}   
                            />     

                            </li>                               
                            </>
                        )
                    }
                })
            }
            
        </ul>
    )
}

export default Market;