import React from 'react';
import _ from 'lodash';

const displayGate = (props) => {
    
    let newprops = {...props}
    console.log('FROM HOC : ', newprops)
    const { mdata = [], pmarket, edata = [], odata = [] } = newprops;
    if (mdata.length) { // for Primary Market data & Detail market data
        console.log('MARKET_DATA', JSON.stringify(mdata));
        let new_mdata = [];
        mdata.map(item => {
            new_mdata.push(item.data)
            return item;
        });
        let sorted_mdata = _.orderBy(new_mdata, ['displayOrder'], 'asc');
        console.table(sorted_mdata, ['displayOrder']);
        let updated_mdata = sorted_mdata.filter(market => market.status.displayable === true);
        
        return {...newprops, mdata : updated_mdata}        
    }

    if (edata.length) {
        // console.log('EV_DATA', JSON.stringify(edata));
        let grouped_edata=_.groupBy(edata, 'typeName');
        console.log(JSON.stringify(grouped_edata));
        let totalgrouped_secondedata = [];
        let typeNames = Object.keys(grouped_edata).map(item => {
            //console.log(grouped_edata[item]);
            let linkeddata = grouped_edata[item].filter(it => {
                return it.hasOwnProperty('linkedEventTypeName')
            });
            //console.table(linkeddata, ['linkedEventTypeName'])
            console.log(JSON.stringify(linkeddata));
            let grouped_secondedata = _.groupBy(linkeddata, 'linkedEventTypeName');
            totalgrouped_secondedata.push(grouped_secondedata)
            //console.table(grouped_secondedata)
            return item;
        })

        console.log('XXXXX', grouped_edata)
        console.log('XXXXXXXXXX', totalgrouped_secondedata)

       /* Object.keys(grouped_edata).map(item => {
            grouped_edata[item].filter(it => {
                return 
            });
            return item;
        })*/

        let updated_edata = edata.filter((item) => item.status.displayable === true);
        console.log('XXXX', updated_edata)
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