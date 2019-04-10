import { connect } from 'react-redux';
import EventComp from '../components/Event';
import displayWrapper from '../utils/displayWrapper';
import {subscribe_bao, unsubscribe_bao} from '../store/actions/'

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