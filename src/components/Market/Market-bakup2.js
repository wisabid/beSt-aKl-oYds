import React, { useEffect } from 'react';
import Outcome from '../Outcome'

const Market = (props) => {
    const { mdata, eventid, outcomedata, showOutcomOndemand, showMarketOndemand, marketdata } = props;

    useEffect(() => {
        console.log(' C  o m ppppppp! DID Mount! Shabz');
        props.showMarketOndemand(mdata);
    }, [])
    console.log(marketdata)
    if (marketdata.length) {
        return (
            <ul >
                {
                    marketdata.map((market) => {
                        if (market.data.eventId === eventid) {
                            return (
                                <li>
                                    <b>(M)</b><span onClick={() => showMarketOndemand(market.data.marketId)}>{market.data.marketId} - {market.data.name}</span>
                                </li>
                            )
                        }
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

export default Market;