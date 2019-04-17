import React, { useEffect, useReducer } from 'react';
import Outcome from '../../containers/Outcome';
import Subscription from '../../containers/Subscription';
import soccer from '../../assets/images/Soccerball.svg';

function marketreducer(state, action) {
    switch(action.type) {
        case 'mtype':
            return {...state};
            break;
        default : 
            return {...state}
    }
}

const Market = (props) => {
    
    const { mdata=[], eventid, outcomedata, showOutcomOndemand, showMarketOndemand, pmarket, ondmdata, subscriptions, markets=[], showmarkets, marketdata=[] } = props;
    const [ state, dispatch ] = useReducer(marketreducer, []);
    useEffect(() => {
        if (mdata.length === 0 && markets.length) {
           showmarkets(markets);            
        }
    }, []);
    if (marketdata.length && !pmarket) {
        //mdata = [...marketdata];
    }
    if (mdata.length || marketdata.length) {
        if (pmarket) {        
                return (
                    <fieldset>
                        <legend>Primary Market</legend>
                        <ul className="noborder">
                            <li key={mdata[0].marketId}>
                                <div className="inrow">
                                    <span className="anchorl" onClick={() => showMarketOndemand(mdata[0].marketId)}>{mdata[0].name} ( <span onClick={() => dispatch({type: 'mtype', payload: mdata[0].type})}>{mdata[0].type}</span> )</span> <br />
                                    <span className="justtitle" title="Live Price Limit">{mdata[0].liabilities.livePriceLimit} ( LPL )</span>
                                    <Subscription 
                                        uid={`m.${mdata[0].marketId}`}
                                    />   
                                </div>                                                              
                                <Outcome eventid={eventid} marketid={mdata[0].marketId} 
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
                                            <span className="anchorl" onClick={() => showMarketOndemand(market.marketId)}><b>{indx+1}. </b>{market.name} ( {market.type} )</span> 
                                            <span className="justtitle" title="Live Price Limit">{market.liabilities.livePriceLimit} ( LPL )</span>
                                            <Subscription 
                                                uid={`m.${market.marketId}`}
                                            />   
                                        </div>
                                        {market.name
                                            ?<Outcome eventid={eventid} marketid={market.marketId} 
                                            showOutcomOndemand={(id) => showOutcomOndemand(id)}
                                            mdata={mdata}   
                                        />   
                                            :null                                            
                                        }                          
                                          

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
                                        <span className="anchorl" onClick={() => props.showMarketOndemandAlt(market.marketId)}>{market.name?`${market.name} ( ${market.type} )`:`Market ( ${market.marketId} )`}</span>                             
                                        <span className="justtitle" title="Live Price Limit">{market.liabilities?`${market.liabilities.livePriceLimit} ( LPL ) `:null} </span>
                                        <Subscription 
                                            uid={`m.${market.marketId}`}
                                        />
                                    </div>
                                        
                                     {market.name
                                        ?<Outcome eventid={eventid} marketid={market.marketId} 
                                        showOutcomOndemand={(id) => showOutcomOndemand(id)}
                                        mdata={mdata} 
                                        ondemand="true"  
                                    />
                                        :null

                                     }   
                                     <hr />
                                        

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