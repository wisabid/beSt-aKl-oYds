import * as types from '../constants/ActionTypes';

export const addUser = (user) => ({
    type : types.ADD_USER,
    user : user
})

export const showlivedata = () => ({
    type : types.LIVE_EVENTS_DATA
})