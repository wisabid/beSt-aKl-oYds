import { connect } from 'react-redux';
import HomeComp from '../components/Home';
import { addUser, showlivedata, showPrimaryMarket, showEventDetails, resetdata } from '../store/actions';
import socket from '../sockets';

const mapStateToProps = (state) => {
    return {
        dummy : state.rL.dummy,
        livedata : state.rL.livedata,
        marketdata : state.rL.marketdata,
        outcomedata : state.rL.outcomedata
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dummyEvent : () => dispatch({type: 'dummyMW'}),
        getLiveEvent : () => dispatch(showlivedata()),
        showPM: (markets) => dispatch(showPrimaryMarket(markets)),
        removemarketdata : (id) => dispatch({type: 'removemarketdata', id: id}),
        showdetail: (id) => dispatch(showEventDetails(id)),
        resetData: () => dispatch(resetdata())
    }
}

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComp);

export default Home;