import React, { useReducer } from 'react';
import Market from '../../containers/Market';
import Subscription from '../../containers/Subscription';
import soccer from '../../assets/images/Soccerball.svg';
import { TYPE_NAME } from '../../store/constants/constants';

const Trial2 = (props) => {
    debugger;
    //const propsArr = [...props]
    const { edata, showDetail, handlePM, showpmlist, pmarket, subscribe_event, subscriptions } = props;
    const e_data = edata[0][TYPE_NAME];
    if (typeof e_data !== "object") {
        debugger;
    }
    const leagues = Object.keys(e_data);
    console.log('LEAGUES', leagues);
    return (
        leagues.map((item, index) => {            
            return (
                <li>
                <fieldset>
                    <legend>{item === "undefined"?TYPE_NAME:item}</legend>
                    <ul>
                    {e_data[item].map(evnt => {
                    return (
                        <li key={evnt.eventId}>
                        <div className="inrow">
                            <span className="anchorl titletext" onClick={() => showDetail(evnt.eventId)}>* {evnt.name}</span>
                            <span className="anchorl" onClick={() => handlePM(evnt, edata)}>( PM )</span>
                            <button className="scores">{evnt.scores.home} - {evnt.scores.away}</button>
                        <Subscription 
                            uid={`e.${evnt.eventId}`}
                        />   
                        </div>   
                        <div className="" style={{paddingLeft: "20px",fontSize: "1.4vmin"}}>
                            <span style={{fontWeight:"bold", color: "grey"}}>{evnt.linkedEventTypeName?evnt.linkedEventTypeName:evnt.typeName} ( {evnt.startTime} )</span>
                        </div>
                        
                        {(showpmlist.indexOf(evnt.eventId) !== -1)
                            ?<Market mdata={props.marketdata} eventid={evnt.eventId} pmarket={pmarket}/>
                            :null
                        }
                        <hr />  
                    </li>
                )
            })}
            </ul>
            </fieldset>
            </li>
            )
        })
        
    )
}

function eventReducer(state, action) {
    return state;
}

const Event = (props) => {
    const { edata, showDetail, handlePM, showpmlist, pmarket, subscribe_event, subscriptions } = props;
    // const [state, dispatch] = useReducer(eventReducer, {
    //     edata : edata
    // });
    if (edata.length) {
        console.log('LIVEDATA', edata);        
        return (
            <fieldset className="outerf">
                <legend>Football Live</legend>
                    <ul className="noborder">
                      <Trial2 {...props} />                               
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

export default Event;