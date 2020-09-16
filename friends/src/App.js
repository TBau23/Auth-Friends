import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import './App.css';

import Login from './components/Login'
import UserPage from './components/UserPage'
import PrivateRoute from './components/PrivateRoute'


function App() {

  
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to='/login' >Login</Link>
          </li>
          <li>
            <Link to='/userpage'>Your Homepage</Link>
          </li>
        </ul>
        <h1>Authentication Practice</h1>
        <Switch>
          <PrivateRoute exact path='/userpage' component={UserPage} />
          <Route exact path='/login' component={Login}/>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
