import React, { useEffect } from 'react';
import Market from '../../containers/Market';
import Subscription from '../../containers/Subscription'
import soccer from '../../assets/images/Soccerball.svg';

const Detail = (props) => {
    const { eventdata } = props;
    useEffect(() => {
        console.log('R E A C T    H O O K S');
    }, []);

    if (eventdata.length) {
        return (
            <>
                <h4 onClick={props.goback} className="backbtn"> Back </h4>
                <div className="bao-live detailScreen">
                <fieldset className="outerf">
                    <legend>Event Detail</legend>
                        <ul className="noborder">
                            {eventdata.length
                                ?(eventdata.map((evnt, index) => {
                                    return (
                                        <li key={evnt.eventId} className="eventLi">
                                            <div className="inrow">
                                                <span className="anchorl"><b>{index+1}. </b>{evnt.name}</span> 
                                                <span style={{fontSize:"2vmin",fontWeight:"bold"}}>[ {evnt.linkedEventTypeName?evnt.linkedEventTypeName:evnt.typeName} ]</span>
                                                <Subscription 
                                                    uid={`e.${evnt.eventId}`} 
                                            />
                                            </div> 
                                            <div className="" style={{paddingLeft: "20px",fontSize: "1.4vmin"}}>
                                                <span style={{fontWeight:"bold", color: "grey"}}>( {evnt.startTime} )</span>
                                            </div>   
                                            <div className="inrow" style={{justifyContent:"space-evenly"}}>
                                                <span className="justtitle">{evnt.competitors[0].name}</span>
                                                <span><button className="scores">{evnt.scores[evnt.competitors[0].position]}</button> Vs <button className="scores">{evnt.scores[evnt.competitors[1].position]}</button></span>
                                                <span className="justtitle">{evnt.competitors[1].name}</span>
                                            </div>                                       
                                            <Market eventid={evnt.eventId} ondmdata={[]}/>
                                        </li>
                                    )
                                }))
                                :<img src={soccer} className="bao-spinner" alt="logo" />
                            }
                        </ul>  
                    </fieldset>                                
                </div>
            </>        
        )
    }
    else {
        return (
            <img src={soccer} className="bao-spinner" alt="logo" />
        )
    }
}

export default Detail;