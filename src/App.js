import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Hero from './components/Hero.js';
import Selection from './components/Section2/Selection';
import Submitted from './components/Submitted/Submitted';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router >
        <Switch>
          <Route path="/" exact>
            <Hero />
            <Selection />
          </Route>
          <Route path="/submitted">
            <Submitted />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
