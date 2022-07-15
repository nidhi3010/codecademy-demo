import React, { Component } from 'react';
// import { Switch } from 'react-router-dom';
//  import { Route } from 'react-router';
import { Router, Route, Routes, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/navbar.component';

import HomePage from './page/home-page/home-page.component';
import SignIn from './page/sign-in-page/sign-in-page.component';
import CatalogPage from './page/catalog-page/catalog-page.component';
import SignUpPage from './page/sign-up-page/sign-up-page.component';

function App() {
  return (
    <div className="App">
    <NavBar/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component = {SignUpPage} />
        <Route path='/catalog' component={CatalogPage} />
      </Switch>
    </div>
  );
}

export default App;
