import { connect } from 'react-redux';
import LoginComp from '../components/Login';
import { addUser } from '../store/actions';

const mapStateToProps = (state) => {
    return {
        users : state.rL.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        adduser : (user) => dispatch(addUser(user))
    }
}


const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComp);


export default Login;
