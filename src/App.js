import React, { Component } from 'react';
// import { Switch } from 'react-router-dom';
//  import { Route } from 'react-router';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/navbar.component';

import HomePage from './page/home-page/home-page.component';
import SignIn from './page/sign-in-page/sign-in-page.component';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/signin' component={SignIn} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
