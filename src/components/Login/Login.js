import React, { useEffect } from 'react';
import soccer from '../../assets/images/Soccerball.svg';
import { InputEl, ButtonEl } from '../FormElement';
import UserContext from '../../context/UserContext';
import Home from '../../containers/Home';
import Counter from '../../containers/Counter'

const Login = () => {
    useEffect(() => {
        console.log('CDM_', 'Login Component')
    }, [])
    //const { username, setuser } = useContext(UserContext)
            return (
                <UserContext.Consumer>
                    {context => (
                        <div className="bao-container" id={context.username}>
                        <img src={soccer} className="bao-logo" alt="logo" />
                        {context.username
                            ?<div className="bao-header">
                                <h4>Welcome <i>{context.username}</i></h4>   
                                <Counter />   
                            </div>
                            :null
                        }
                        
                        {!context.username
                            ?<div className="bao-login">
                                <form onSubmit={context.setuser}>
                                    <InputEl legend="Name" elname="username" eltype="text" elplaceholder="Enter your Name"/>
                                    <ButtonEl elvalue="Go" eltype="submit"/>
                                </form>
                            </div>
                            :<Home />
                        }
                        
                    </div> 
                    )}                    
                </UserContext.Consumer>                
                                          
            )
}


export default Login;