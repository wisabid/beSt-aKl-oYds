import React from 'react';
import Subscription from '../../containers/Subscription';
import Outcome from '../../containers/Outcome';

const MarketTypes = (props) => {
    const { marketdata } = props;
    debugger;
    let newmarketdata = marketdata.filter(item => props.dta[0].indexOf(item.marketId) !== -1)
    return (
        <>
            <button onClick={props.goback} className="backbtn anchorl"> Home </button>
            <div className="bao-live">            
                <fieldset>
                    <legend>Category Based Market(s) Display</legend>
                    <ul className="noborder">
                        {
                            newmarketdata.map((market, indx) => {
                                    return (
                                        <>
                                        <li key={market.marketId}>
                                            <div className="inrow">
                                                <span className="anchorl"><b>{indx+1}. </b>{market.name}</span> 
                                                <span className="anchorl">( {market.type} )</span>
                                                <span className="justtitle" title="Live Price Limit">{market.liabilities.livePriceLimit} ( LPL )</span>
                                                <Subscription 
                                                    uid={`m.${market.marketId}`}
                                                />   
                                            </div>
                                            {market.name
                                                ?<Outcome eventid={market.eventId} marketid={market.marketId} />   
                                                :null                                            
                                            }                          
                                            

                                        </li>                               
                                        </>
                                    )  
                            })

                        }          
                        
                    </ul>
                </fieldset>
            </div>
        </>
    )
}

export default MarketTypes;