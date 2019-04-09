import { connect } from 'react-redux';
import MarketComp from '../components/Market';
import { outcomeOnDemand, showMarketOndemand, showMarketOndemandAlt } from '../store/actions'
import displayWrapper from '../utils/displayWrapper';

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
        showMarketOndemandAlt : (id) => dispatch(showMarketOndemandAlt([id])),
        showOutcomOndemand : (id) => dispatch(outcomeOnDemand([id], true))
    }
}

const Market = connect(mapStateToProps, mapdispatchToProps)(displayWrapper(MarketComp));

export default Market;