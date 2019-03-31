import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import UserContext from './context/UserContext';

class App extends Component {  
  state = {
      username : ''
  }
  setUser = (ev) => {
      ev.preventDefault();
      if (ev.target.username.value) {
        this.setState({
            username : ev.target.username.value
        })
      }
      else {
        
      }
      
  }
  render() {
    return (
      <UserContext.Provider value={{
          username : this.state.username,
          setuser : this.setUser
      }}>
        <div className="App">
            <Login />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
