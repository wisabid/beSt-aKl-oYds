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
    this.wsUrl = "ws://192.168.99.100:8889";
  }
  
  setUser = (ev) => {
      ev.preventDefault();
      if (ev.target.username.value) {
        this.ws = new WebSocket(this.wsUrl);        
        this.setState({
            username : ev.target.username.value,
            ws : this.ws
        })
      }
      else {
        //do not allow in
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
