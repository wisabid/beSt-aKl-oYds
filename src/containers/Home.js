import { connect } from 'react-redux';
import HomeComp from '../components/Home';
import { showlivedata, showPrimaryMarket, showEventDetails, resetdata } from '../store/actions';

const mapStateToProps = (state) => {
    return {
        dummy : state.rL.dummy,
        livedata : state.rL.livedata,
        marketdata : state.rL.marketdata,
        outcomedata : state.rL.outcomedata,
        marketTypes : state.rL.marketTypes
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