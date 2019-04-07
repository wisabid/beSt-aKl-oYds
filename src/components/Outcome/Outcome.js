import React from 'react';
import toggleOdds from '../../utils/toggleOdds';

const Outcome = (props) => {
    const { odata, marketid, eventid } = props;
    return (
        <dl >
            {
                odata.map((outcome) => {
                    if (outcome.data.eventId === eventid && outcome.data.marketId === marketid) {
                        return (
                            <>
                            <dt>{outcome.data.name} ?</dt>
                            <dd>- {outcome.data.outcomeId}</dd> 
                            <dt>ODDS</dt>
                            <dd>- {outcome.data.price.decimal}</dd>                              
                            </>
                        )
                    }
                })
            }
            
        </dl>
    )
}

export default toggleOdds(Outcome);