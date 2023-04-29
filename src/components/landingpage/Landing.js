import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './LandingPage';

const Landing = () => {
  return (
    <Router>
    <Switch>
      <Route exact path="/landing" component={LandingPage} />
    </Switch>
  </Router>
  )
}

export default Landing  