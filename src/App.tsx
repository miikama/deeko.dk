import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import EntryText from './landing_page/EntryText';
import LoginPage from './login_page/LoginPages';
import MapPage from './map_page/map_page';
import ProtectedRoute from './components/protected_route';

class App extends Component {

  state = {
    currentUser: undefined
  }
  
  render() {
    return (
      <BrowserRouter>
          <Route exact path="/" component={EntryText}/>
          <Route exact path="/login" component={LoginPage} />
          <ProtectedRoute exact path="/map" component={MapPage} />
      </BrowserRouter>
    )
  }
}

export default App;
