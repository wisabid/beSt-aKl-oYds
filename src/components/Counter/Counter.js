import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({betslipdata, subscriptions}) => {
    return (
        <div className="betslip">
            <span className="anchorl" title="Bet Slip">{betslipdata.length}</span>
            <span className="anchorl" title="Subscriptions">{subscriptions.length}</span>
        </div>
    )
}

Counter.propTypes = {
    betslipdata : PropTypes.array.isRequired,
    subscriptions : PropTypes.array.isRequired
}

export default Counter;