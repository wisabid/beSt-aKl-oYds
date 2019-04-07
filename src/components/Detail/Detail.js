import React, { useEffect } from 'react';
// import Event from '../../containers/Event'
import Market from '../../containers/Market';

const Detail = (props) => {
    const { eventdata } = props;
    console.clear();
    console.log('ALFIEEE', eventdata)
    useEffect(() => {
        debugger;
        console.log('R E A C T   H O O K S');
    });

    return (
        <>
            <h4 onClick={props.goback}> Back </h4>
            <div className="bao-live">
                <ul>
                    {eventdata.length
                        ?(eventdata.map((evnt) => {
                            return (
                                <li key={evnt.eventId}>
                                    -> <span>{evnt.name}</span> - 
                                    <Market mdata={props.marketdata} eventid={evnt.eventId} />
                                      
                                
                                </li>
                            )
                        }))
                        :null
                    }
                </ul>                  
            </div>
        </>        
    )
}

export default Detail;