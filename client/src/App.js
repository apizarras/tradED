import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from './components/SignIn/SignIn';
import logo from './assets/img/stock-chart-logoSM.jpg';
import Dashboard from './components/Dashboard/Dashboard';
import Main from './components/Main/Main';
import Search from './components/Search/Search';
import Definitions from './components/Definitions/Definitions';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/dashboard" component={Main} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/definitions" component={Definitions} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
