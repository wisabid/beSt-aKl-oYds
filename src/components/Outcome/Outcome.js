import React, { useEffect, useContext } from 'react';
import UserContext from '../../context/UserContext';
import * as constants from '../../store/constants/constants';
import Subscription from '../../containers/Subscription';
import soccer from '../../assets/images/Soccerball.svg';

const Outcome = (props) => {
    
    const { odata=[], marketid, eventid, showOutcomOndemand, outcomedata=[], ondemand=false } = props;
    const { odssunit, changeOddUnit } = useContext(UserContext);
    useEffect(() => {
        console.log('CDM', 'Outcome COmp', outcomedata);   

    }, []);

    if (outcomedata.length) {  
        return (
            <fieldset>
                <legend>Outcome(s)</legend>
                <ul className="noborder">
                {
                    outcomedata.map((outcome, ind) => {
                        if (outcome.data.eventId === eventid && outcome.data.marketId === marketid) {
                            if (outcome.data.status.displayable) {
                                return ( 
                                    <>
                                    <li key={outcome.data.outcomeId}>
                                    <div className="inrow">
                                        <span className="anchorl" onClick={() => showOutcomOndemand(outcome.data.outcomeId)}>- {outcome.data.name}</span>
                                            <Subscription 
                                                uid={`o.${outcome.data.outcomeId}`}
                                            />
                                    </div>
                                    <div className="inrow odds" style={{justifyContent: "center"}}>
                                        {(odssunit === constants.ODDS_FRACTIONAL)
                                            ?<span className="anchorl" onClick={changeOddUnit}>{outcome.data.price.num}/{outcome.data.price.num}</span>
                                            :<span className="anchorl" onClick={changeOddUnit}>{outcome.data.price.decimal}</span>
                                        }
                                    </div>  
                                        <hr />
                                        
                                        
                                    </li>                            
                                    </>
                                )
                            }
                            else if (outcome.data.status.suspended && ondemand) {
                                return (
                                    <li key={outcome.data.outcomeId}>
                                        <div className="inrow odds" style={{justifyContent: "center", background:"lightgrey", color:"grey"}}>
                                        SUSPENDED
                                    </div> 
                                    </li>
                                )
                            }
                        }
                        
                    })
                }
                
            </ul>
            </fieldset>
            
        )
    }
    else {
        return (
            <img src={soccer} className="bao-spinner" alt="logo" />
        )
    }
}

export default Outcome;