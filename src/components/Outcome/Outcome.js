import React, { useEffect, useContext, useState } from 'react';
import UserContext from '../../context/UserContext';
import * as constants from '../../store/constants/constants';
import Subscription from '../../containers/Subscription';
import soccer from '../../assets/images/Soccerball.svg';

const Outcome = (props) => {
    
    const { odata=[], marketid, eventid, showOutcomOndemand, outcomedata=[], ondemand=false, addToBet } = props;
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
                                    {outcome.data.status.suspended
                                        ?<div className="inrow odds" style={{justifyContent: "center", background:"lightgrey", color:"grey"}}>
                                            SUSPENDED
                                        </div> 
                                        :<>
                                            <div className="inrow">
                                                <span className="anchorl" onClick={() => showOutcomOndemand(outcome.data.outcomeId)}>- {outcome.data.name}</span>
                                                <Subscription 
                                                    uid={`o.${outcome.data.outcomeId}`}
                                                />
                                            </div>
                                            <div className="inrow odds" style={{justifyContent: "space-evenly"}}>
                                                {(odssunit === constants.ODDS_FRACTIONAL)
                                                    ?<span className="anchorl" onClick={changeOddUnit}>{outcome.data.price.num}/{outcome.data.price.num}</span>
                                                    :<span className="anchorl" onClick={changeOddUnit}>{outcome.data.price.decimal}</span>
                                                }
                                                {(props.betslipdata.indexOf(outcome.data.outcomeId) === -1)
                                                    ?<button className="anchorl" style={{padding: "5px 10px", fontStyle: "italic"}} onClick={() => addToBet(outcome.data.outcomeId)}>Add to Betslip</button>
                                                    :<button className="anchorl" style={{padding: "5px 10px", fontStyle: "italic", background:"Orange"}} onClick={() => addToBet(outcome.data.outcomeId)}>Remove from Betslip</button>

                                                }
                                                
                                            </div>
                                        </>
                                    }   
                                     
                                    
                                        <hr />
                                        
                                        
                                    </li>                            
                                    </>
                                )
                            }
                            else if (outcome.data.status.suspended) {
                                return (
                                    <li key={outcome.data.outcomeId}>
                                        <div className="inrow odds" style={{justifyContent: "center", background:"lightgrey", color:"grey"}}>
                                        SUSPENDED
                                    </div> 
                                    </li>
                                )
                            }
                            else {
                                return (
                                    <li key={outcome.data.outcomeId}>
                                        <div className="inrow odds" style={{justifyContent: "center", background:"lightgrey", color:"grey"}}>
                                        -
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