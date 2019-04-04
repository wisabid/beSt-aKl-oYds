import { connect } from 'react-redux';
import HomeComp from '../components/Home';
import { addUser, showlivedata } from '../store/actions';
import socket from '../sockets';

const mapStateToProps = (state) => {
    return {
        users : state.rL.users,
        dummy : state.rL.dummy,
        livedata : state.rL.livedata.data
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
        getLiveEvent : () => dispatch({type: 'getLiveMW'}),
        dummyEvent : () => dispatch({type: 'dummyMW'})
    }
}

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComp);

export default Home;