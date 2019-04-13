import React from 'react';
import './subscription.css'

const Subscription = ({subscriptions, uid, subscribe_event, unsubscribe_event}) => {
    debugger;
    return (
        <div className="bao-subscription">
        {(subscriptions.indexOf(uid) === -1)
            ?<button className={`${uid.substr(0,1)}_subsbtn`} onClick={() => subscribe_event(uid)}>Subscribe</button>
            :<button className={`${uid.substr(0,1)}_subsbtn`} onClick={() => unsubscribe_event(uid)} style={{background:"Orange"}}>Unsubscribe</button>   
        }
        </div>                         
    )
}

export default Subscription;