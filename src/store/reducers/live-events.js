import * as types from '../constants/ActionTypes';

const initialState = {
    users : [],
    dummy : '',
    livedata : [],
    marketdata : [],
    outcomedata : [],
    eventdata : [],
    ondemandmarketdata : [],
    subscriptions : []
}
const LiveEvents = (state = initialState, action) => {
    let newState = {...state};
    console.log('SHABZ', newState)
    switch(action.type) {
        case 'dummy':
            return {...newState, dummy : 'Dummy filled !'}        
        case 'showlive':
            // let displayableData = action.data.data.filter((item) => item.status.displayable === true)
            return {...newState, livedata : action.data.data};
            break;
        case 'showmarket':
            let newondemandmarketdata = [...state.ondemandmarketdata]
            let findMarketinOND = newondemandmarketdata.filter(item => item.marketId === action.data.data.marketId);
            //if it falls in ondemand market data state
            if (findMarketinOND.length) {
                findMarketinOND = action.data.data;
                newondemandmarketdata = newondemandmarketdata.map(item => {
                    if (item.marketId === action.data.data.marketId) {
                        item = findMarketinOND;
                    }
                    return item;
                })
                // newondemandmarketdata = newondemandmarketdata.filter(item => {
                //     if ('status' in item && item.status.displayable) {
                //         return item;
                //     }
                // });
                return {...newState, ondemandmarketdata : newondemandmarketdata}
            }
            else {
                let newmarketdata = [...state.marketdata];
                
                let findMarket = newmarketdata.find(item => item.data.marketId === action.data.data.marketId);
                if (findMarket) {
                    let updatedMarketdata = newmarketdata.map(item => {
                        if (item.data.marketId === action.data.data.marketId) {
                            item = action.data;
                        }
                        return item;
                    });                
                }
                else {
                    newmarketdata.push(action.data);
                    //newondemandmarketdata.splice(newondemandmarketdata.indexOf(action.data.data.marketId), 1);
                }
                // newmarketdata = newmarketdata.filter(item => item.data.status.displayable === true);
                return {...newState, marketdata : newmarketdata, ondemandmarketdata : newondemandmarketdata};
            }
            break;
        case 'showoutcome':
            let newoutcomedata = [...state.outcomedata]
            let findOutcome = newoutcomedata.find(item => item.data.outcomeId === action.data.data.outcomeId);
            if (findOutcome) {
                let updatedOutcomedata = newoutcomedata.map(item => {
                    if (item.data.outcomeId === action.data.data.outcomeId) {
                        item = action.data;
                    }
                    return item;
                });                
            }
            else {
                newoutcomedata.push(action.data);
            }
            newoutcomedata = newoutcomedata.filter(item => item.data.status.displayable === true);
            return {...newState, outcomedata : newoutcomedata};
            break;
        case 'removemarketdata':
            let updatedmarketdata = newState.marketdata.filter(item => item.data.eventId !== action.id);
            let updatedoutcomedata = newState.outcomedata.filter(item => item.data.eventId !== action.id);
            return {...newState, marketdata : updatedmarketdata, outcomedata : updatedoutcomedata}
            break;
        case 'showevent':
            let neweventdata = [];
            neweventdata.push(action.data)
            return {...newState, eventdata : neweventdata};
            break;
        case 'showondemandmdata':
            return {...newState, ondemandmarketdata : action.data}
            break;
        case 'reset':
            return {...newState, marketdata: [], outcomedata : [], eventdata : [], ondemandmarketdata : []}
            break;
        case 'showsubsriptions':
            return {...newState, subscriptions : action.data}
            break;
        case 'update_outcomeprice':
            if (newState.outcomedata.length) {
                let newOutcomedata = newState.outcomedata.map(outcome => {
                    if (outcome.data.outcomeId === action.data.outcomeId) {
                        outcome.data.price = action.data.price;
                        outcome.data.status = action.data.status;
                    }
                    return outcome;
                })
                return {...newState, outcomedata:newOutcomedata}
            }
            return {...newState}
            break;
        case 'update_marketstatus':
            if (newState.marketdata.length) {
                let newMarketdata = newState.marketdata.map(market => {
                    if (market.data.marketId === action.data.marketId) {
                        debugger;
                        market.data.status = action.data.status;
                    }
                    return market;
                })
                return {...newState, marketdata:newMarketdata}
            }
            return {...newState}
            break;
        case 'update_outcomestatus':
            if (newState.outcomedata.length) {
                let newOutcomedata = newState.outcomedata.map(outcome => {
                    if (outcome.data.outcomeId === action.data.outcomeId) {
                        outcome.data.status = action.data.status;
                    }
                    return outcome;
                })
                return {...newState, outcomedata:newOutcomedata}
            }
            return {...newState}
            break;
        case types.ADD_USER:
            // newState.users.push(action.user)
            return newState
            break;
        case types.LIVE_EVENTS_DATA:
            newState.users.push('Iam  a LIVE DATA')
            return newState;
            break;
        
        default: 
            return newState;
    }
    
}

export default LiveEvents;