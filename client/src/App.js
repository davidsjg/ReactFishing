import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Home from './pages/Home'

import './App.css'

function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route exact path={'/'}>
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
