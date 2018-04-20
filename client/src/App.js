import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Signin from './auth/Signin';

class App extends Component {
  state = {
    user: null,
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Route to="/signin" render={() => (
        <Signin onSignin={this.signinSuccess} />
        )}>
        </Route>
      </div>
    );
  }

  signinSuccess = data => {
    
  };

}

export default App;
