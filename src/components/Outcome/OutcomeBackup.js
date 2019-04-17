import React, { useEffect } from 'react';
import toggleOdds from '../../utils/toggleOdds';
import UserContext from '../../context/UserContext';
import * as constants from '../../store/constants/constants';

const Outcome = (props) => {
    const { odata, marketid, eventid, showOutcomOndemand, mdata } = props;

    useEffect(() => {
            props.showOutcomes(props.outcomes)
    }, []); // passing an empty array as second argument triggers the callback in useEffect only after the initial render thus replicating `componentDidMount` lifecycle behaviour


    if (odata.length) {    
        return (
            <UserContext.Consumer>{context => 
            (<ul >
                {
                    odata.map((outcome) => {
                        if (outcome.data.eventId === eventid && outcome.data.marketId === marketid) {
                            return ( 
                                <>
                                <li>
                                    <span onClick={() => showOutcomOndemand(outcome.data.outcomeId)}>{outcome.data.name}</span>  <br />
                                    <div>
                                    - {outcome.data.outcomeId}<br />
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

export default toggleOdds(Outcome);