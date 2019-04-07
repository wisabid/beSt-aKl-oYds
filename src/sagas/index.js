import { takeEvery, takeLatest, put } from 'redux-saga/effects';
import * as types from '../store/constants/ActionTypes';
import { showlivedata } from '../store/actions'

function* dummyMW() {
    console.log('Im from Dummy middleware')
    yield put({type:'dummy'})
}

// function* getLiveMW(props) {
//     yield put({type : 'getLiveData', data : ['Alfie', 2, 'My Son my life']})
// }

export const handleLiveData = function* (params) {
    yield takeEvery('dummyMW', dummyMW)
    yield takeEvery(types.LIVE_EVENTS_DATA, (action) => {
        params.webS.waitForConnection(() => params.webS.send(JSON.stringify(action)))
        // params.webS.send(JSON.stringify(action))
    })
    yield takeLatest(types.MARKETS_DATA, (action) => {
        action.id.map((market, index) => {
            if (index < 10) {
                console.log(index);
                params.webS.waitForConnection(() => params.webS.send(JSON.stringify({...action, id: market})))   
            }         
        })
    })
    yield takeLatest(types.OUTCOME_DATA, (action) => {
        action.id.map((outcome, index) => {
                params.webS.waitForConnection(() => params.webS.send(JSON.stringify({...action, id: outcome})))   
        })
    })
   
    yield takeLatest(types.EVENT_DATA, (action) => {
            params.webS.waitForConnection(() => params.webS.send(JSON.stringify(action)))       
    })
}
