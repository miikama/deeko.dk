import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';
import EntryText from './landing_page/EntryText';
import LoginPage from './login_page/LoginPages';
import Authentication from './Authentication'

class App extends Component {

  state = {
    currenUser: undefined
  }
  
  render() {
    return (
      <BrowserRouter>
          <Route exact path="/" component={EntryText}/>
          <Route exact path="/login" component={LoginPage} />
      </BrowserRouter>
    )
  }
}

export default App;
