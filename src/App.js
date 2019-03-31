import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import UserContext from './context/UserContext';

class App extends Component {  
  
  constructor() {
    super();
    this.state = {
        username : '',
        ws : null
    }    
  }
  
  setUser = (ev) => {
      ev.preventDefault();
      if (ev.target.username.value) {
        this.ws = new WebSocket("ws://192.168.99.101:8889");
        this.ws.addEventListener("open", e => {
          console.log('Connection Open...');
          // this.ws.send(JSON.stringify({ type: "getLiveEvents" }));
        });
        this.ws.addEventListener("message", e => {
            console.log(e.data);
        }); 
        this.setState({
            username : ev.target.username.value,
            ws : this.ws
        })
      }
      else {
        
      }
      
  }
  render() {
    return (
      <UserContext.Provider value={{
          username : this.state.username,
          setuser : this.setUser,
          ws : this.state.ws
      }}>
        <div className="App">
            <Login />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
