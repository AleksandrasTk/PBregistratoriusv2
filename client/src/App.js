import './App.css';
import './main.css';
import React, { Fragment } from 'react';
import Navbar from './Components/Layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Playersstate from './Context/Players/PlayersState';
import AuthState from './Context/Auth/AuthState';
import Landing from './Components/Layout/Landing';
import PrivateRoute from './Components/Routing/PrivateRoute';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import Home from './Components/Layout/Home';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <Playersstate>
        <Router>
          <Fragment>
            <div className='navigation'>
              <Navbar />
            </div>
            <Switch>
              <PrivateRoute exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/landing' component={Landing} />
            </Switch>
          </Fragment>
        </Router>
      </Playersstate>
    </AuthState>
  );
};

export default App;
