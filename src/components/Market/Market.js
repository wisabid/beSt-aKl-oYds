import React from 'react';
import Outcome from '../Outcome';
import Subscription from '../../containers/Subscription';

const Market = (props) => {
    const { mdata, eventid, outcomedata, showOutcomOndemand, showMarketOndemand, pmarket, ondmdata, subscriptions } = props;
    
    if (pmarket) {
        if (mdata.length) {
            return (
                <fieldset>
                <legend>Primary Market</legend>
                <ul className="noborder">
                <li><b>(M)</b><span onClick={() => showMarketOndemand(mdata[0].data.marketId)}>{mdata[0].data.marketId} - {mdata[0].data.name}</span> <br />
                - {mdata[0].data.type}   
                <Subscription 
                    uid={`m.${mdata[0].data.marketId}`}
                />   
                <br />                                
                <Outcome odata={outcomedata} eventid={eventid} marketid={mdata[0].data.marketId} 
                    showOutcomOndemand={(id) => showOutcomOndemand(id)}
                    mdata={mdata[0]}   
                />     

                </li> 
                </ul>  
                </fieldset>
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
        return (
            <fieldset>
                <legend>Market(s)</legend>
            <ul className="noborder">
                {
                    mdata.map((market) => {
                        if (market.data.eventId === eventid) {
                            return (
                                <>
                                <li><b>(M)</b><span onClick={() => showMarketOndemand(market.data.marketId)}>{market.data.marketId} - {market.data.name}</span> <br />
                                - {market.data.type}   
                                <Subscription 
                                    uid={`m.${market.data.marketId}`}
                                />   
                                <br />                                
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
                                - {market.type}   
                                <Subscription 
                                    uid={`m.${market.marketId}`}
                                />
                                <br />                                
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
            </fieldset>
        )
    }
}

export default Market;