import { connect } from 'react-redux';
import OutcomeComp from '../components/Outcome';
import { showOutcomes } from '../store/actions'

const mapStateToProps = (state) => {
    return {        
        outcomedata : state.rL.outcomedata,
        betslipdata : state.rL.betslipdata
    }
}

const mapdispatchToProps = (dispatch) => {
    return {
        showOutcomes : (outcomes) => dispatch(showOutcomes(outcomes)),
        addToBet : (id) => dispatch({type: 'betslip', payload : {id : id}})
    }
}

const Outcome = connect(mapStateToProps, mapdispatchToProps)(OutcomeComp);

export default Outcome;