import React, { useEffect } from 'react';
import Outcome from '../Outcome';
import Subscription from '../../containers/Subscription';
import soccer from '../../assets/images/Soccerball.svg';

const Market = (props) => {
    const { mdata=[], eventid, outcomedata, showOutcomOndemand, showMarketOndemand, pmarket, ondmdata, subscriptions, markets=[], showmarkets, marketdata=[] } = props;
    useEffect(() => {
        console.log('CDM_', 'Market Component', markets);
        if (mdata.length === 0 && markets.length) {
           showmarkets(markets);            
        }
    }, []);
    if (marketdata.length && !pmarket) {
        //mdata = [...marketdata];
    }
    if (mdata.length || marketdata.length) {
        console.log('MARKETTT', marketdata)
        if (pmarket) {        
                return (
                    <fieldset>
                        <legend>Primary Market</legend>
                        <ul className="noborder">
                            <li key={mdata[0].marketId}>
                                <div className="inrow">
                                    <span className="anchorl" onClick={() => showMarketOndemand(mdata[0].marketId)}>{mdata[0].marketId} - {mdata[0].name}- {mdata[0].type}</span> <br />
                                    <Subscription 
                                        uid={`m.${mdata[0].marketId}`}
                                    />   
                                </div>                                                              
                                <Outcome odata={outcomedata} eventid={eventid} marketid={mdata[0].marketId} 
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
                <fieldset>
                    <legend>Market(s)</legend>
                <ul className="noborder">
                    {
                        marketdata.map((market, indx) => {
                            if (market.eventId === eventid) {
                                return (
                                    <>
                                    <li key={market.marketId}>
                                        <div className="inrow">
                                            <b>{indx+1}. </b><span className="anchorl" onClick={() => showMarketOndemand(market.marketId)}>{market.marketId} - {market.name}- {market.type}   </span> 
                                            <Subscription 
                                                uid={`m.${market.marketId}`}
                                            />   
                                        </div>
                                                                    
                                        <Outcome odata={outcomedata} eventid={eventid} marketid={market.marketId} 
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
                                    <li key={market.marketId}>
                                    <div className="inrow">
                                        <b>(M)</b><span className="anchorl" onClick={() => props.showMarketOndemandAlt(market.marketId)}>{market.marketId} -  - {market.type}   </span>                             
                                        <Subscription 
                                            uid={`m.${market.marketId}`}
                                        />
                                    </div>
                                        
                                        
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
    else {
        return (
            <img src={soccer} className="bao-spinner" alt="logo" />
        )
    }
}

export default Market;