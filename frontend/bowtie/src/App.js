import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Layout from "../src/components/gamelist/Layout"
import LandingPage from "../src/components/LandingPage/LandingPage"
function App() {
  return (
  <Router>
    <Switch>
    <Route path="/" exact component={LandingPage}/>
    <Route path="/board" component={Layout}/>
    </Switch>
  </Router>
  
  );
}

export default App;

 /*<div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
</div> */ 