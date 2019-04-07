import { connect } from 'react-redux';
import EventComp from '../components/Event';

const mapStateToProps = (state) => {
    return {        
        marketdata : state.rL.marketdata,
    }
}

const Event = connect(mapStateToProps, dispatch => {})(EventComp);

export default Event;