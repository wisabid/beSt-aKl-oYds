import { connect } from 'react-redux';
import MarketComp from '../components/Market';
import { outcomeOnDemand } from '../store/actions'

const mapStateToProps = (state) => {
    return {        
        outcomedata : state.rL.outcomedata
    }
}

const mapdispatchToProps = (dispatch) => {
    return {
        showOutcomOndemand : (id) => dispatch(outcomeOnDemand([id]))
    }
}

const Market = connect(mapStateToProps, mapdispatchToProps)(MarketComp);

export default Market;