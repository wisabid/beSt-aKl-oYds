import { connect } from 'react-redux';
import SubsComp from '../components/Subscription';
import {subscribe_bao, unsubscribe_bao} from '../store/actions/'

const mapStateToProps = (state) => {
    return {        
        subscriptions : state.rL.subscriptions
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        subscribe_event : (payload) => dispatch(subscribe_bao(payload)),
        unsubscribe_event : (payload) => dispatch(unsubscribe_bao(payload)),
    }
}

const Subscription = connect(mapStateToProps, mapDispatchToProps)(SubsComp);

export default Subscription;