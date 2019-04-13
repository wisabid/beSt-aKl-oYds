import React, { useContext, useEffect } from 'react';
import soccer from '../../assets/images/Soccerball.svg';
import { InputEl, ButtonEl } from '../FormElement';
import UserContext from '../../context/UserContext';
import Home from '../../containers/Home';


const Login = () => {
    useEffect(() => {
        console.log('CDM_', 'Login Component')
    }, [])
    const { username, setuser } = useContext(UserContext)
            return (                
                        <div className="bao-container" id={username}>
                            <img src={soccer} className="bao-logo" alt="logo" />
                            {!username
                                ?<div className="bao-login">
                                    <form onSubmit={setuser}>
                                        <InputEl legend="Name" elname="username" eltype="text" elplaceholder="Enter your Name"/>
                                        <ButtonEl elvalue="Go" eltype="submit"/>
                                    </form>
                                </div>
                                :<Home />
                            }
                            
                        </div>                   
            )
}


export default Login;