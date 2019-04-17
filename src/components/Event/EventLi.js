import React from 'react';

const EventLi = (props) => {
    debugger;
    const {  edata, showpmlist, marketdata, pmarket, item, showDetail, handlePM, Subscription, Market } = props;
    return (
        <>
            <li key={props.children.eventId}>
                <div className="inrow">
                    <span className="anchorl titletext" onClick={() => showDetail(props.children.eventId)}>* {props.children.name}</span>
                    <span className="anchorl" onClick={() => handlePM(props.children, edata)}>( PM )</span>
                    <button className="scores">{props.children.scores.home} - {props.children.scores.away}</button>
                <Subscription 
                    uid={`e.${props.children.eventId}`}
                />   
                </div>   
                <div className="" style={{fontSize: "1.4vmin"}}>
                    <span style={{fontWeight:"bold", color: "grey"}}>( {props.children.startTime} )</span>
                </div>
                {props.children.status.suspended
                    ?<div className="inrow odds" style={{justifyContent: "center", background:"lightgrey", color:"grey"}}>
                        SUSPENDED
                    </div> 
                    :null
                }

                {(showpmlist.indexOf(props.children.eventId) !== -1)
                    ?<Market mdata={marketdata} eventid={props.children.eventId} pmarket={pmarket} typename={item}/>
                    :null
                }
                <hr />  
            </li>
        </>
    )
}

export default EventLi;