import React, { Component } from 'react';
import soccer from '../Soccerball.svg';
import { InputEl, ButtonEl } from './FormElement';
import UserContext from '../context/UserContext';
import Home from './Home';
import { connect } from 'react-redux';

class Login extends Component {   

    render() {
            return (
                <UserContext.Consumer>
                    {context => (
                        <div className="bao-container" id={context.username}>
                            
                            <img src={soccer} className="bao-logo" alt="logo" />
                            {!context.username
                                ?<div className="bao-login">
                                    <form onSubmit={context.setuser}>
                                        <InputEl legend="Name" elname="username" eltype="text" elplaceholder="Enter your Name"/>
                                        <ButtonEl elvalue="Go" eltype="submit"/>
                                    </form>
                                </div>
                                :<h4>hi{this.props.adduser(context.username) && this.props.users}</h4>
                            }
                            
                        </div>
                    )}
                </UserContext.Consumer>      
            )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         users : state.rL.users
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         adduser : (user) => dispatch({type: 'ADD_USER', user : user})
//     }
// }

export default Login;