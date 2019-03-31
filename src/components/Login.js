import React, { Component } from 'react';
import soccer from '../Soccerball.svg';
import { InputEl, ButtonEl } from './FormElement';
import UserContext from '../context/UserContext';

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
                                :<h1>Welcome {context.username}!</h1>
                            }
                            
                        </div>
                    )}
                </UserContext.Consumer>      
            )
    }
}

export default Login;