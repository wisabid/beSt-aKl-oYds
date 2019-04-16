import React, { Component } from 'react';
import './App.css';
import Login from './containers/Login';
import UserContext from './context/UserContext';
import * as constants from './store/constants/constants';

export class App extends Component {  
  
  constructor() {
    super();
    this.state = {
        username : 'Alfie',
        odssunit : constants.ODDS_DECIMAL
    } 
  }
  
  setUser = (ev) => {
      ev.preventDefault();
      if (ev.target.username.value) {
        this.setState({
            username : ev.target.username.value
        })
      }
      else {
        //do not allow in
      }
      
  }

  changeOddUnit = () => {
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
    console.log('CDM_', 'App Component')
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
