import { connect } from 'react-redux';
import CounterComp from '../components/Counter';

const mapStateToProps = (state) => {
    return {        
        betslipdata : state.rL.betslipdata,
        subscriptions: state.rL.subscriptions
    }
}

const mapdispatchToProps = (dispatch) => {
    return {
        
    }
}

const Counter = connect(mapStateToProps, mapdispatchToProps)(CounterComp);

export default Counter;