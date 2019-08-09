import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from './components/SignIn/SignIn';
import logo from './assets/img/stock-chart-logoSM.jpg';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={SignIn} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
