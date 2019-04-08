import React, { useEffect } from 'react';
import toggleOdds from '../../utils/toggleOdds';
import UserContext from '../../context/UserContext';
import * as constants from '../../store/constants/constants';

const Outcome = (props) => {
    const { outcomes, outcomedata, marketid, eventid, showOutcomOndemand, mdata } = props;

    useEffect(() => {
            console.log(' C O M P DID M O U N T', props.outcomes)
            props.showOutcomes(props.outcomes)
    }, []); // passing an empty array as second argument triggers the callback in useEffect only after the initial render thus replicating `componentDidMount` lifecycle behaviour


    if (outcomes.length) {  
        let newoutcomes = outcomes.reduce((all, item) => {
            all.push({outcomeId: item})
            return all
        }, []);
        console.log('NEW OUTCOMES', newoutcomes)
        console.log('o o ',outcomedata);
        let outcomes_data;
        if (outcomedata.length) {
            outcomes_data = newoutcomes.map((outcome) => {
                
                    outcome = outcomedata.filter(item => item.data.outcomeId === outcome.outcomeId); 
                    //outcome = outcome.data
                return outcome
            
            })
        }
        else {
            outcomes_data = outcomes;
        }
        console.log('U U ', outcomes_data)
        return (
            <UserContext.Consumer>{context => 
            (<ul >
                                {
                                    outcomes.map((outcome) => {
                                        return (
                                            <li>
                                                <span onClick={() => showOutcomOndemand(outcome)}>+outcome-{outcome}</span>
                                            </li>
                                        )
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