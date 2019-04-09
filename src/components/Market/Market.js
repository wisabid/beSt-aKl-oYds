import React from 'react';
import Outcome from '../Outcome';


const Market = (props) => {
    const { mdata, eventid, outcomedata, showOutcomOndemand, showMarketOndemand, pmarket, ondmdata } = props;
    
    if (pmarket) {
        if (mdata.length) {
            return (
                <ul >
                <li><b>(M)</b><span onClick={() => showMarketOndemand(mdata[0].data.marketId)}>{mdata[0].data.marketId} - {mdata[0].data.name}</span> <br />
                - {mdata[0].data.type}   <br />                                
                <Outcome odata={outcomedata} eventid={eventid} marketid={mdata[0].data.marketId} 
                    showOutcomOndemand={(id) => showOutcomOndemand(id)}
                    mdata={mdata[0]}   
                />     

                </li> 
                </ul>  
            )
        }
        else {
            return (
                <ul>
                    <li>Suspended</li>
                </ul>
            )
        }
    }
    else {
        console.log('BUHAHAHAHA', props.ondemandmarketdata)
        return (
            <ul >
                {
                    mdata.map((market) => {
                        if (market.data.eventId === eventid) {
                            return (
                                <>
                                <li><b>(M)</b><span onClick={() => showMarketOndemand(market.data.marketId)}>{market.data.marketId} - {market.data.name}</span> <br />
                                - {market.data.type}   <br />                                
                                <Outcome odata={outcomedata} eventid={eventid} marketid={market.data.marketId} 
                                    showOutcomOndemand={(id) => showOutcomOndemand(id)}
                                    mdata={mdata}   
                                />     

                                </li>                               
                                </>
                            )
                        }
                    })

                }
                {
                    props.ondemandmarketdata.map((market) => {
                        
                            return (
                                <>
                                <li><b>(M)</b><span onClick={() => props.showMarketOndemandAlt(market.marketId)}>{market.marketId} - EXTRAAAAA</span> <br />                               
                                - {market.type}   <br />                                
                                <Outcome odata={outcomedata} eventid={eventid} marketid={market.marketId} 
                                    showOutcomOndemand={(id) => showOutcomOndemand(id)}
                                    mdata={mdata}   
                                />    

                                </li>                               
                                </>
                            )
                    })
                }
                
            </ul>
        )
    }
}

export default Market;