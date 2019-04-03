import { combineReducers } from 'redux';
import LiveEvents from './live-events';

const reducers = combineReducers({
    rL : LiveEvents
})

export default reducers;