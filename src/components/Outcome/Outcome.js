import React from 'react';
import toggleOdds from '../../utils/toggleOdds';
import UserContext from '../../context/UserContext';
import * as constants from '../../store/constants/constants';

const Outcome = (props) => {
    const { odata, marketid, eventid } = props;
    
    return (
        <UserContext.Consumer>{context => 
        (<dl >
            {
                odata.map((outcome) => {
                    if (outcome.data.eventId === eventid && outcome.data.marketId === marketid) {
                        return (
                            <>
                            <dt>{outcome.data.name} - {context.odssunit} ?</dt>
                            <dd>- {outcome.data.outcomeId}</dd> 
                            <dt>ODDS</dt>
                            {(context.odssunit === constants.ODDS_FRACTIONAL)
                                ?<dd onClick={context.changeOddUnit}>- {outcome.data.price.num}/{outcome.data.price.num}</dd>
                                :<dd onClick={context.changeOddUnit}>- {outcome.data.price.decimal}</dd>
                            }
                                                          
                            </>
                        )
                    }
                })
            }
            
        </dl>
        )}</UserContext.Consumer>
    )
}

export default toggleOdds(Outcome);