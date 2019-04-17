import _ from 'lodash';
import * as types from '../constants/ActionTypes';
import { TYPE_NAME } from '../constants/constants';


const initialState = {
    users : [],
    dummy : '',
    livedata : [],
    marketdata : [],
    outcomedata : [],
    eventdata : [],
    ondemandmarketdata : [],
    subscriptions : [],
    betslipdata : [],
    marketTypes : []
}
const LiveEvents = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type) {
        case 'dummy':
            return {...newState, dummy : 'Dummy filled !'}        
        case 'showlive':
            // let displayableData = action.data.data.filter((item) => item.status.displayable === true)
            let filteredData = action.data.data.filter(item => item.status.displayable)

            let grouped_linkededata=_.groupBy(filteredData, 'linkedEventTypeName');
            let consolidated_edata = [];
            consolidated_edata.push({[TYPE_NAME] : grouped_linkededata});            
            return {...newState, livedata : consolidated_edata};
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
                    return {...newState, marketdata : updatedMarketdata}           
                }
                else {
                    newmarketdata.push(action.data);
                    //newondemandmarketdata.splice(newondemandmarketdata.indexOf(action.data.data.marketId), 1);
                }
                // newmarketdata = newmarketdata.filter(item => item.data.status.displayable === true);
                
                return {...newState, marketdata : newmarketdata, ondemandmarketdata : newondemandmarketdata};
            }
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
                return {...newState, outcomedata : updatedOutcomedata}               
            }
            else {
                newoutcomedata.push(action.data);
            }
            //newoutcomedata = newoutcomedata.filter(item => item.data.status.displayable === true);
            return {...newState, outcomedata : newoutcomedata};
        case 'removemarketdata':
            let updatedmarketdata = newState.marketdata.filter(item => item.data.eventId !== action.id);
            let updatedoutcomedata = newState.outcomedata.filter(item => item.data.eventId !== action.id);
            return {...newState, marketdata : updatedmarketdata, outcomedata : updatedoutcomedata}
        case 'showevent':
            let neweventdata = [];
            neweventdata.push(action.data)
            return {...newState, eventdata : neweventdata};
        case 'showondemandmdata':
            return {...newState, ondemandmarketdata : action.data}
        case 'reset':
            return {...newState, marketdata: [], outcomedata : [], eventdata : [], ondemandmarketdata : [], marketTypes : []}
        case 'showsubsriptions':
            return {...newState, subscriptions : action.data}
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
        case 'update_marketstatus':
            if (newState.marketdata.length) {
                let newMarketdata = newState.marketdata.map(market => {
                    if (market.data.marketId === action.data.marketId) {
                        market.data.status = action.data.status;
                    }
                    return market;
                })
                return {...newState, marketdata:newMarketdata}
            }
            return {...newState}
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
        case 'betslip':
            /*let bsoutcome = newState.outcomedata.filter(item => item.data.outcomeId === action.payload.id);
            let bsmarket = newState.marketdata.filter(item => item.data.marketId === bsoutcome[0].data.marketId);
            let bsevent = newState.livedata[0][TYPE_NAME][action.payload.typename].filter(item => item.eventId === bsmarket[0].data.eventId);
            let betslipdata = [];
            */
            let newbetslipdata = [...newState.betslipdata];
            (newbetslipdata.indexOf(action.payload.id) === -1)?newbetslipdata.push(action.payload.id):newbetslipdata.splice(newbetslipdata.indexOf(action.payload.id), 1);
    
            return {...newState, betslipdata : newbetslipdata}
        case 'mkttypes':
            let newmarketdata = [...newState.marketdata];
            let findMarket = newmarketdata.reduce((all, item) => {
                if( item.data.type === action.payload.typ ) {
                    all.push(item.data.marketId)
                }
                return all;
            }, []);
            return {...newState, marketTypes : findMarket };
        case types.ADD_USER:
            // newState.users.push(action.user)
            return newState
        case types.LIVE_EVENTS_DATA:
            newState.users.push('Iam  a LIVE DATA')
            return newState;
        
        default: 
            return newState;
    }
    
}

export default LiveEvents;