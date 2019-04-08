import { connect } from 'react-redux';
import OutcomeComp from '../components/Outcome';
import { showOutcomes } from '../store/actions'

const mapStateToProps = (state) => {
    return {        
        outcomedata : state.rL.outcomedata
    }
}

const mapdispatchToProps = (dispatch) => {
    return {
        showOutcomes : (outcomes) => dispatch(showOutcomes(outcomes))
    }
}

const Outcome = connect(mapStateToProps, mapdispatchToProps)(OutcomeComp);

export default Outcome;