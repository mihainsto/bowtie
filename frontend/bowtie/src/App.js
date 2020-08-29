import React from 'react';
import {useState} from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Layout from "../src/components/gamelist/Layout"
import LandingPage from "../src/components/LandingPage/LandingPage"
import LoginPage from "../src/components/LoginPage/LoginPage"
import RegisterPage from "../src/components/RegisterPage/RegisterPage"
import {OptionsContext} from "Context.js";

function App() {
  const [optionsContext, setOptonsContext] = useState();
  return (
  <OptionsContext.Provider value = {[optionsContext, setOptonsContext]}>
    <Router>
      <Switch>
      <Route path="/bowtie" exact component={Layout}/> {/* debug */}
      <Route path="/" exact component={LandingPage}/>
      <Route path="/board" component={Layout}/>
      <Route path="/login" component={LoginPage}/>
      <Route path="/register" component={RegisterPage}/>
      </Switch>
    </Router>
  </OptionsContext.Provider>
  
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