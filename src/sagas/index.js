import { takeEvery, takeLatest, put } from 'redux-saga/effects';
import * as types from '../store/constants/ActionTypes';

function* dummyMW() {
    yield put({type:'dummy'})
}

// function* getLiveMW(props) {
//     yield put({type : 'getLiveData', data : ['Alfie', 2, 'My Son my life']})
// }


export const handleLiveData = function* (params) {
    yield takeEvery('dummyMW', dummyMW)
    yield takeEvery(types.LIVE_EVENTS_DATA, (action) => {
        params.webS.waitForConnection(() => params.webS.send(JSON.stringify(action)));
        // params.webS.send(JSON.stringify(action))
    })
    yield takeLatest(types.MARKETS_DATA, (action) => {
        let ondmdata = [];
        
        action.id.map((market, index) => {
            if (index < 10) {
                params.webS.waitForConnection(() => params.webS.send(JSON.stringify({...action, id: market})))   
            } 
            else {
                ondmdata.push({marketId : market})
            }   
            return market     
        })
        if (ondmdata.length) {
            params.dispatch({type : 'showondemandmdata', data : ondmdata})
        }
    })

    yield takeLatest('getMarket_alt', (action) => {
        params.webS.waitForConnection(() => params.webS.send(JSON.stringify({type:"getMarket", id: action.payload.id[0]})))  
    })

    yield takeLatest(types.OUTCOME_DATA, (action) => {
        action.id.map((outcome, index) => {
                params.webS.waitForConnection(() => params.webS.send(JSON.stringify({...action, id: outcome})))   
                return outcome;
        })
    })
   
    yield takeLatest(types.EVENT_DATA, (action) => {
            params.webS.waitForConnection(() => params.webS.send(JSON.stringify(action)))       
    })

    yield takeLatest(types.SUBSCRIBE_BAO, (action) => {
        params.webS.waitForConnection(() => params.webS.send(JSON.stringify(action)))    
    })
    
    yield takeLatest(types.UNSUBSCRIBE_BAO, (action) => {
        params.webS.waitForConnection(() => params.webS.send(JSON.stringify(action)))    
    })
    
    
    

}
