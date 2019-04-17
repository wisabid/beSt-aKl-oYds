import React, { useEffect } from 'react';
import Outcome from '../Outcome'

const Market = (props) => {
    const { mdata, eventid, outcomedata, showOutcomOndemand, showMarketOndemand } = props;

    useEffect(() => {
    }, [])

    return (
        <ul >
            {
                mdata.map((market) => {
                    if (market.data.eventId === eventid) {
                        return (
                            <>
                            <li><b>(M)</b><span onClick={() => showMarketOndemand(market.data.marketId)}>{market.data.marketId} - {market.data.name}</span> <br />
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