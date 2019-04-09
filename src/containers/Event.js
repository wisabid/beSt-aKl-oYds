import { connect } from 'react-redux';
import EventComp from '../components/Event';
import displayWrapper from '../utils/displayWrapper';

const mapStateToProps = (state) => {
    return {        
        marketdata : state.rL.marketdata,
    }
}

const Event = connect(mapStateToProps, dispatch => {})(displayWrapper(EventComp));

export default Event;