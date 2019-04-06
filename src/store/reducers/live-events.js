import * as types from '../constants/ActionTypes';

const initialState = {
    users : [],
    dummy : '',
    livedata : [],
    marketdata : [],
    outcomedata : []
}
const LiveEvents = (state = initialState, action) => {
    let newState = {...state};
    debugger;
    switch(action.type) {
        case 'dummy':
            return {...newState, dummy : 'Dummy filled !'}        
        case 'showlive':
            return {...newState, livedata : action.data};
            break;
        case 'showmarket':
            let newmarketdata = [...state.marketdata]
            newmarketdata.push(action.data)
            return {...newState, marketdata : newmarketdata};
            break;
        case 'showoutcome':
            let newoutcomedata = [...state.outcomedata]
            newoutcomedata.push(action.data)
            return {...newState, outcomedata : newoutcomedata};
            break;
        case 'removemarketdata':
            let updatedmarketdata = newState.marketdata.filter(item => item.data.eventId !== action.id);
            let updatedoutcomedata = newState.outcomedata.filter(item => item.data.eventId !== action.id);
            return {...newState, marketdata : updatedmarketdata, outcomedata : updatedoutcomedata}
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