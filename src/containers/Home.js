import { connect } from 'react-redux';
import HomeComp from '../components/Home';
import { addUser, showlivedata, showPrimaryMarket, showEventDetails, resetdata } from '../store/actions';
import socket from '../sockets';

const mapStateToProps = (state) => {
    return {
        users : state.rL.users,
        dummy : state.rL.dummy,
        livedata : state.rL.livedata,
        marketdata : state.rL.marketdata,
        outcomedata : state.rL.outcomedata
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        adduser : (user) => {
            return
            //const ws = socket(dispatch, user);
            // return dispatch(showlivedata())
            // ws.onopen(() => {
            //     console.log('open from container')
            //     ws.send(JSON.stringify(showlivedata()));
            // })
            //ws.send(JSON.stringify(addUser(user)))
            //dispatch(addUser(user))
        },        
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