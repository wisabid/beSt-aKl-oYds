import React, { Component } from 'react';
import UserContext from '../context/UserContext';

class Home extends Component {
    static contextType = UserContext;
    
    render() {
        // console.log(contextType);
        return (
            
                    <h1>Hellooo </h1>
            
        )
    }

    componentDidMount() {
        console.log('YOUR CONTEXT', this.context)
        //this.context.ws.send(JSON.stringify({ type: "getLiveEvents" }));
        // this.props.contxt.ws.send(JSON.stringify({ type: "getLiveEvents" }));
    }
   
}

export default Home;