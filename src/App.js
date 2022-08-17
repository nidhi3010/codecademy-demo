import React, { Component } from 'react';
// import { Switch } from 'react-router-dom';
//  import { Route } from 'react-router';
import { Router, Route, Routes, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/navbar.component';

import BusinessSolution from './page/business-solution-page/business-solution-page.component';
import HomePage from './page/home-page/home-page.component';
import SignIn from './page/sign-in-page/sign-in-page.component';
import CatalogPage from './page/catalog-page/catalog-page.component';
import SignUpPage from './page/sign-up-page/sign-up-page.component';
import FullCatalog from './page/full-catalog/full-catalog.component';
import PricingPage from './page/pricing-page/pricing-page.component';
import TeamsFreeTrail from './page/teams-free-trial-page/teams-free-trial-page.component';
import SeeCourses from './page/see-courses/see-courses.component';
import CatalogResourcePage from './page/catalog-resource-page/catalog-resource-page.component';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUpPage} />
        <Route path='/catalog' component={CatalogPage} />
        <Route path='/all' component={FullCatalog} />
        <Route path='/pricing' component={PricingPage} />
        <Route path='/businesssolution' component={BusinessSolution} />
        <Route path='/teamfreetrial' component={TeamsFreeTrail} />
        <Route path='/seecourses' component={SeeCourses} />
        <Route path='/catalogresource' component={CatalogResourcePage} />
      </Switch>
    </div>
  );
}

export default App;
