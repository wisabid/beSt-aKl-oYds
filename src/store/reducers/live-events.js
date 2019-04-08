import * as types from '../constants/ActionTypes';

const initialState = {
    users : [],
    dummy : '',
    livedata : [],
    marketdata : [],
    outcomedata : [],
    eventdata : [],
    ondemandmarketdata : []
}
const LiveEvents = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type) {
        case 'dummy':
            return {...newState, dummy : 'Dummy filled !'}        
        case 'showlive':
            return {...newState, livedata : action.data};
            break;
        case 'showmarket':
            let newmarketdata = [...state.marketdata];
            let newondemandmarketdata = [...state.ondemandmarketdata]
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
                newondemandmarketdata.splice(newondemandmarketdata.indexOf(action.data.data.marketId), 1);
                debugger;
            }
            return {...newState, marketdata : newmarketdata, ondemandmarketdata : newondemandmarketdata};
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
        debugger;
            return {...newState, ondemandmarketdata : action.data}
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