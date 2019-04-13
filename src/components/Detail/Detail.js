import React, { useEffect } from 'react';
// import Event from '../../containers/Event'
import Market from '../../containers/Market';
import Subscription from '../../containers/Subscription'
import soccer from '../../assets/images/Soccerball.svg';

const Detail = (props) => {
    const { eventdata } = props;
    console.log('ALFIEEE', eventdata)
    useEffect(() => {
        console.log('R E A C T   H O O K S');
    });

    if (eventdata.length) {
        return (
            <>
                <h4 onClick={props.goback}> Back </h4>
                <div className="bao-live">
                <fieldset className="outerf">
                    <legend>Event Detail</legend>
                        <ul>
                            {eventdata.length
                                ?(eventdata.map((evnt, index) => {
                                    return (
                                        <li key={evnt.eventId}>
                                            <div className="inrow">
                                                <span className="anchorl"><b>{index+1}. </b>{evnt.name}</span> 
                                                <Subscription 
                                                    uid={`e.${evnt.eventId}`} 
                                            />
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