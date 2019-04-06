import * as types from '../constants/ActionTypes';

export const addUser = (user) => ({
    type : types.ADD_USER,
    user : user
})

export const showlivedata = () => ({ 
    type: "getLiveEvents", 
    primaryMarkets: true 
})

export const showPrimaryMarket = (arrayOfMarkets) => {
    return { 
        type: "getMarket", 
        id: arrayOfMarkets 
    }
}

export const showOutcomes = (arrayOfOutcomes) => {
    return { 
        type: "getOutcome", 
        id: arrayOfOutcomes 
    }
}