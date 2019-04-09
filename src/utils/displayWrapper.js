import React from 'react';

const displayGate = (props) => {
    
    let newprops = {...props}
    console.log('FROM HOC : ', newprops)
    const { mdata = [], pmarket, edata = [], odata = [] } = newprops;
    if (mdata.length) { // for Primary Market data & Detail market data
        let updated_mdata = mdata.filter(market => market.data.status.displayable === true);
        console.log(updated_mdata)
        return {...newprops, mdata : updated_mdata}        
    }

    if (edata.length) {
        let updated_edata = edata.filter((item) => item.status.displayable === true);
        return {...newprops, edata : updated_edata}       
    }

    if (odata.length) {
        
        debugger;
    }
    return newprops;
}


export default (comp) => {
    return (props) => {
        return comp(displayGate(props));
    }
}