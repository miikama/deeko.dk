import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import EntryText from './landing_page/EntryText';
import LoginPage from './login_page/LoginPages';
import MapPage from './map_page/map_page';
import ProtectedRoute from './components/protected_route';
import AuthService from './Authentication';

class App extends Component {

  state = {
    currentUser: undefined
  }

  auth_service = AuthService;

  
  render() {
    console.log("auth: ", this.auth_service);
    return (
      <BrowserRouter>
          <Route exact path="/" render={(props) => 
            <EntryText {...props} auth_service={this.auth_service}/>
          }
          />
          <Route exact path="/login" render={(props) => 
            <LoginPage {...props} auth_service={this.auth_service}/>          
          }/>
          <ProtectedRoute exact path="/map" component={MapPage}/>
      </BrowserRouter>
    )
  }
}

export default App;
