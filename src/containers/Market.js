import { connect } from 'react-redux';
import MarketComp from '../components/Market';
import { outcomeOnDemand, showMarketOndemand } from '../store/actions'

const mapStateToProps = (state) => {
    return {        
        outcomedata : state.rL.outcomedata,
        marketdata : state.rL.marketdata,
        ondemandmarketdata : state.rL.ondemandmarketdata
    }
}

const mapdispatchToProps = (dispatch) => {
    return {
        showMarketOndemand : (id) => dispatch(showMarketOndemand([id])),
        showOutcomOndemand : (id) => dispatch(outcomeOnDemand([id]))
    }
}

const Market = connect(mapStateToProps, mapdispatchToProps)(MarketComp);

export default Market;