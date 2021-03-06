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

export const showMarketOndemand = (id) => {
    return { 
        type: "getMarket", 
        id: id 
    }
}

export const showMarketOndemandAlt = (id, altflag=true) => {
    return { 
        type: "getMarket_alt", 
        payload : {
            id: id,
            altflag : true
        }
    }
}

export const showOutcomes = (arrayOfOutcomes) => {
    return { 
        type: "getOutcome", 
        id: arrayOfOutcomes 
    }
}

export const outcomeOnDemand = (id) => {
    return { 
        type: "getOutcome", 
        id: id 
    }
}

export const showEventDetails = (id) => {
    return { 
        type: "getEvent", 
        id: id 
    }
}

export const resetdata = () => {
    return {
        type: "reset"
    }
}

export const subscribe_bao = (payload) => {
    return {
        type: 'subscribe',
        keys: [payload]
    }
}

export const unsubscribe_bao = (payload) => {
    return {
        type: 'unsubscribe',
        keys: [payload]
    }
}

