import React, { Component } from 'react';
import './App.css';
import Login from './containers/Login';
import UserContext from './context/UserContext';
import * as constants from './store/constants/constants';

class App extends Component {  
  
  constructor() {
    super();
    this.state = {
        username : 'Alfie',
        odssunit : constants.ODDS_DECIMAL
        // ws : null
    } 
    this.wsUrl = "ws://192.168.99.100:8889";
  }
  
  setUser = (ev) => {
      ev.preventDefault();
      if (ev.target.username.value) {
        // this.ws = new WebSocket(this.wsUrl);        
        this.setState({
            username : ev.target.username.value
            // ws : this.ws
        })
      }
      else {
        //do not allow in
      }
      
  }

  changeOddUnit = () => {
    debugger;
    let newunit;
    if (this.state.odssunit === constants.ODDS_FRACTIONAL) {
      newunit = constants.ODDS_DECIMAL;
    }
    else {
      newunit = constants.ODDS_FRACTIONAL;
    }
    this.setState({
      odssunit: newunit
    })
  }

  componentDidMount() {
    console.log('c o m p o n e n t   D i d M o u n t')
  }

  render() {
    return (
      <UserContext.Provider value={{
          username : this.state.username,
          setuser : this.setUser,
          odssunit : this.state.odssunit,
          changeOddUnit : this.changeOddUnit
      }}>
        <div className="App">
            <Login />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
