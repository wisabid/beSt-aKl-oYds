import React from 'react';
import PropTypes from 'prop-types';

export const InputEl = (props) => {
    return (
        <fieldset>
            <legend>{props.legend}</legend>
            <input type={props.eltype} placeholder={props.elplaceholder} id={props.elname} autoComplete="off" />
        </fieldset>
    )
}

InputEl.propTypes = {
    legend: PropTypes.string.isRequired,
    eltype: PropTypes.string.isRequired, 
    elplaceholder: PropTypes.string,
    elname: PropTypes.string.isRequired
}

export const ButtonEl = (props) => {
    return (
        <button type={props.eltype} onClick={props.click}>{props.elvalue}</button>
    )
}

ButtonEl.propTypes = {
    eltype: PropTypes.string.isRequired,
    elvalue:PropTypes.string.isRequired
}

