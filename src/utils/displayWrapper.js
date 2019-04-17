import _ from 'lodash';

const displayGate = (props) => {
    
    let newprops = {...props}
    const { mdata = [], marketdata = [] } = newprops;

     if (marketdata.length) { // For Detail market data
        let new_marketdata = [];
        marketdata.map(item => {
            new_marketdata.push(item.data)
            return item;
        });
        let sorted_marketdata = _.orderBy(new_marketdata, ['displayOrder'], 'asc');
        let updated_marketdata = sorted_marketdata.filter(market => market.status.displayable === true);
        
        return {...newprops, marketdata : updated_marketdata}        
    }

    if (mdata.length) { // for Primary Market data & Detail market data
        let new_mdata = [];
        mdata.map(item => {
            new_mdata.push(item.data)
            return item;
        });
        let sorted_mdata = _.orderBy(new_mdata, ['displayOrder'], 'asc');
        let updated_mdata = sorted_mdata.filter(market => market.status.displayable === true);
        
        return {...newprops, mdata : updated_mdata}        
    }

   

    /*if (edata.length) {
        debugger;
        // console.log('EV_DATA', JSON.stringify(edata));
        let grouped_edata=_.groupBy(edata, 'typeName');
        const TYPE_NAME = Object.keys(grouped_edata)[0];
        let grouped_linkededata=_.groupBy(edata, 'linkedEventTypeName');
       
        console.log('XX', grouped_edata);
        console.log('XXX', grouped_linkededata);
        let consolidated_edata = [];
        consolidated_edata.push({[TYPE_NAME] : grouped_linkededata})
        console.log('CONS', consolidated_edata)
        let count = 0;
        consolidated_edata.map(item => {
            console.log('ABID', item[TYPE_NAME])
            console.log('ABID', Object.keys(item[TYPE_NAME]));
            let newArr = Object.keys(item[TYPE_NAME]).map(it => {
                console.log('ABID', item[TYPE_NAME][it])
                item[TYPE_NAME][it].map((evnt, index) => {
                    console.log('CONSOL', evnt);
                })
            })
        })*/
        
        /*Object.keys(grouped_edata).map(item => {
            console.log('XXy', grouped_edata[item]);
            Object.keys(grouped_linkededata).map(it => {
                console.log('XXyy', grouped_linkededata[it]);
                grouped_linkededata[it].map(itt => {
                    console.log('XXyyy', itt);
                    console.log('YYYY', itt.typeName)
                    console.log('YYYYXX', item)
                    console.log('ALFIEEEx', grouped_edata[item])
                    console.log('ALFIEEEy', grouped_linkededata[it])
                    if (itt.typeName === item) {
                        // grouped_edata[item] = grouped_linkededata[it]
                    }
                    return itt;
                })
            })
        })
        console.log('ADDDD', grouped_edata)*/
          /* let updated_grouped_linkeddata = Object.keys(grouped_linkededata).map((item) => {
            console.log('X', item)
            if (item === "undefined") {
                item = grouped_linkededata[item][0].typeName;
            }
           return item;
        })
      let consolidated_edata = Object.keys(grouped_edata).map(item => {
            updated_grouped_linkeddata.filter(it => )
            {...grouped_edata[item], }
        });*/
        /*console.log(JSON.stringify(grouped_edata));
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
        })*/

        
        //console.log('XXXXXXX', updated_grouped_linkeddata)
       // console.log('XXXXXXXXXX', totalgrouped_secondedata)

       /* Object.keys(grouped_edata).map(item => {
            grouped_edata[item].filter(it => {
                return 
            });
            return item;
        })*/

       // let updated_edata = edata.filter((item) => item.status.displayable === true);
        // console.log('CONSO', updated_edata)
        /*return {...newprops, edata : consolidated_edata}       
    }*/

    
    return newprops;
}


export default (comp) => {
    return (props) => {
        return comp(displayGate(props));
    }
}