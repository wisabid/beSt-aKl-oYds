import React from 'react';

export const InputEl = (props) => {
    return (
        <fieldset>
            <legend>{props.legend}</legend>
            <input type={props.eltype} placeholder={props.elplaceholder} id={props.elname} autoComplete="off" />
        </fieldset>
    )
}

export const ButtonEl = (props) => {
    return (
        <button type={props.eltype} onClick={props.click}>{props.elvalue}</button>
    )
}

