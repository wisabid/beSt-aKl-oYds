import { connect } from 'react-redux';
import EventComp from '../components/Event';
import displayWrapper from '../utils/displayWrapper';

const mapStateToProps = (state) => {
    return {        
        marketdata : state.rL.marketdata
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       
    }
}

const Event = connect(mapStateToProps, mapDispatchToProps)(displayWrapper(EventComp));

export default Event;