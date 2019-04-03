import * as types from '../constants/ActionTypes';

const initialState = {
    users : []
}
const LiveEvents = (state = initialState, action) => {
    let newState = {...state};
    debugger;
    switch(action.type) {
        case types.ADD_USER:
            newState.users.push(action.user)
            return newState
            break;
        default: 
            return newState;
    }
    
}

export default LiveEvents;