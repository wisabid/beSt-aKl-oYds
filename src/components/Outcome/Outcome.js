import React from 'react';
import UserContext from '../../context/UserContext';
import * as constants from '../../store/constants/constants';
import Subscription from '../../containers/Subscription';

const Outcome = (props) => {
    const { odata, marketid, eventid, showOutcomOndemand, mdata } = props;
    if (odata.length) {    
        return (
            <UserContext.Consumer>{context => 
            (<fieldset>
                <legend>Outcome(s)</legend>
                <ul className="noborder">
                {
                    odata.map((outcome) => {
                        if (outcome.data.eventId === eventid && outcome.data.marketId === marketid) {
                            return ( 
                                <>
                                <li>
                                    <span onClick={() => showOutcomOndemand(outcome.data.outcomeId)}><b>(O)</b>{outcome.data.name}</span>  <br />
                                    <div>
                                    - {outcome.data.outcomeId}
                                    <Subscription 
                                        uid={`o.${outcome.data.outcomeId}`}
                                    />
                                    <br />
                                    ODDS <br />
                                    {(context.odssunit === constants.ODDS_FRACTIONAL)
                                        ?<span onClick={context.changeOddUnit}>- {outcome.data.price.num}/{outcome.data.price.num}</span>
                                        :<span onClick={context.changeOddUnit}>- {outcome.data.price.decimal}</span>
                                    }
                                    </div>
                                </li>                            
                                </>
                            )
                        }
                    })
                }
                
            </ul>
            </fieldset>
            )}</UserContext.Consumer>
        )
    }
    else {
        return (
            <li>
                YET TO IMPLEMENT
            </li>   
        )
    }
}

export default Outcome;