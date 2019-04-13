import React from 'react';
import './subscription.css'

const Subscription = ({subscriptions, uid, subscribe_event, unsubscribe_event}) => {
    return (
        <div className="bao-subscription">
        {(subscriptions.indexOf(uid) === -1)
            ?<button className={`${uid.substr(0,1)}_subsbtn`} onClick={() => subscribe_event(uid)} title={`Subscribe to ${uid}`}>Subscribe</button>
            :<button className={`${uid.substr(0,1)}_subsbtn`} onClick={() => unsubscribe_event(uid)} style={{background:"Orange"}} title={`Unsubscribe from ${uid}`}>Unsubscribe</button>   
        }
        </div>                         
    )
}

export default Subscription;