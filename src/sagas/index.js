import { takeEvery, put } from 'redux-saga/effects';
import * as types from '../store/constants/ActionTypes';
import { showlivedata } from '../store/actions'

function* dummyMW() {
    debugger;
    console.log('Im from Dummy middleware')
    yield put({type:'dummy'})
}

function* getLiveMW(props) {
    debugger;
    yield put({type : 'getLiveData', data : ['Alfie', 2, 'My Son my life']})
}

export const handleLiveData = function* (params) {
    debugger;
    yield takeEvery('dummyMW', dummyMW)
    yield takeEvery('getLiveMW', (action) => {
        debugger;
        params.webS.send(JSON.stringify({ type: "getLiveEvents", primaryMarkets: true }))
    })
}
