import React from 'react';
import './subscription.css'

const Subscription = ({subscriptions, uid, subscribe_event, unsubscribe_event}) => {
    return (
        <div className="bao-subscription">
        {(subscriptions.indexOf(uid) === -1)
            ?<span onClick={() => subscribe_event(uid)}>**Subscribe</span>
            :<span onClick={() => unsubscribe_event(uid)}>!!Unsubscribe</span>   
        }
        </div>                         
    )
}

export default Subscription;