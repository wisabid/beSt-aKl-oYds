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
                    odata.map((outcome, ind) => {
                        if (outcome.data.eventId === eventid && outcome.data.marketId === marketid) {
                            return ( 
                                <>
                                <li key={outcome.data.outcomeId}>
                                <div className="inrow">
                                    <span className="anchorl" onClick={() => showOutcomOndemand(outcome.data.outcomeId)}><b>{ind+1}</b>{outcome.data.name} -  - {outcome.data.outcomeId}</span>
                                        <Subscription 
                                            uid={`o.${outcome.data.outcomeId}`}
                                        />
                                </div>
                                <div className="inrow">
                                    {(context.odssunit === constants.ODDS_FRACTIONAL)
                                        ?<span className="titletext odds oddslink" onClick={context.changeOddUnit}>{outcome.data.price.num}/{outcome.data.price.num}</span>
                                        :<span className="titletext odds oddslink" onClick={context.changeOddUnit}>{outcome.data.price.decimal}</span>
                                    }
                                </div>  
                                    <hr />
                                    
                                    
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