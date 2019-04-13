import { connect } from 'react-redux';
import DetailComp from '../components/Detail';
import {subscribe_bao, unsubscribe_bao} from '../store/actions/'

const mapStateToProps = (state) => {
    return {        
        eventdata : state.rL.eventdata,
        ondemandmarketdata : state.rL.ondemandmarketdata,
        subscriptions : state.rL.subscriptions
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        subscribe_event : (payload) => dispatch(subscribe_bao(payload)),
        unsubscribe_event : (payload) => dispatch(unsubscribe_bao(payload)),
    }
}

const Detail = connect(mapStateToProps, mapDispatchToProps)(DetailComp);

export default Detail;