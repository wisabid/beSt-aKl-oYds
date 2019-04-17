import { connect } from 'react-redux';
import MarketTypesComp from '../components/Market/MarketTypes';
import displayWrapper from '../utils/displayWrapper';

const mapStateToProps = (state) => {
    return {        
        marketdata : state.rL.marketdata
    }
}

const mapdispatchToProps = (dispatch) => {
    return {
        
    }
}

const MarketTypes = connect(mapStateToProps, mapdispatchToProps)(displayWrapper(MarketTypesComp));

export default MarketTypes;