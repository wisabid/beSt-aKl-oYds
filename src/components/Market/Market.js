import React from 'react';
import Outcome from '../Outcome'

const Market = (props) => {
    const { mdata, eventid, outcomedata } = props;
    return (
        <dl >
            {
                mdata.map((market) => {
                    if (market.data.eventId === eventid) {
                        return (
                            <>
                            <dt>{market.data.marketId} - {market.data.name} ?</dt>
                            <dd>- {market.data.type}</dd>                                    
                            <Outcome odata={outcomedata} eventid={eventid} marketid={market.data.marketId}/>                                    
                            </>
                        )
                    }
                })
            }
            
        </dl>
    )
}

export default Market;