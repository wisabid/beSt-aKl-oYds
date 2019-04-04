import * as types from '../constants/ActionTypes';

const initialState = {
    users : [],
    dummy : '',
    livedata : []
}
const LiveEvents = (state = initialState, action) => {
    let newState = {...state};
    debugger;
    switch(action.type) {
        case 'dummy':
            return {...newState, dummy : 'Dummy filled !'}
        case 'getLiveData':
            return {...newState, dummy : JSON.stringify(action.data)}; 
            break;
        case 'showlive':
            return {...newState, livedata : action.data};
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