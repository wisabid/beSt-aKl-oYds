import React from 'react';

const Counter = ({betslipdata, subscriptions}) => {
    return (
        <div className="betslip">
            <span className="anchorl" title="Bet Slip">{betslipdata.length}</span>
            <span className="anchorl" title="Subscriptions">{subscriptions.length}</span>
        </div>
    )
}

export default Counter;