import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import UserContext from './context/UserContext';

class App extends Component {  
  
  constructor() {
    super();
    this.state = {
        username : '',
        ws : null,
        message : ''
    }    
  }
  
  setUser = (ev) => {
      ev.preventDefault();
      if (ev.target.username.value) {
        this.ws = new WebSocket("ws://192.168.99.100:8889");
        /*this.ws.addEventListener("open", e => {
          console.log('Connection Open...');
          // this.ws.send(JSON.stringify({ type: "getLiveEvents" }));
        });
        this.ws.addEventListener("message", e => {
            console.log('ALFIEEE', e.data);
            this.setState({
              message : e.data
            })
        }); */
        this.setState({
            username : ev.target.username.value,
            ws : this.ws
        })
      }
      else {
        
      }
      
  }

  componentDidMount() {
    console.log('c o m p o n e n t   D i d M o u n t')
  }
  render() {
    return (
      <UserContext.Provider value={{
          username : this.state.username,
          setuser : this.setUser,
          ws : this.state.ws,
          message : this.state.message
      }}>
        <div className="App">
            <Login />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
