import { connect } from 'react-redux';
import MarketComp from '../components/Market';

const mapStateToProps = (state) => {
    return {        
        outcomedata : state.rL.outcomedata
    }
}

const Market = connect(mapStateToProps, dispatch => {})(MarketComp);

export default Market;