import './App.css';
import './main.css';
import React, { Fragment } from 'react';
import Navbar from './Components/Layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Playersstate from './Context/Players/PlayersState';
import Landing from './Components/Layout/Landing';
// import Login from "./Components/Auth/Login";
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import Home from './Components/Layout/Home';

function App() {
  return (
    <Playersstate>
      <Router>
        <Fragment>
          <div className='navigation'>
            <Navbar />
          </div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/landing' component={Landing} />
          </Switch>
        </Fragment>
      </Router>
    </Playersstate>
  );
}

export default App;
