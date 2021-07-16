import "./App.css";
import "./main.css";
import React, { Fragment } from "react";
import Playeritems from "./Components/player/Playeritems";
import Navbar from "./Components/Layout/Navbar";
import Playerform from "./Components/player/playerform";
import Playersstate from "./Context/Players/PlayersState";
// import Landing from './Components/Layout/Landing';
// import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
// import Tabs from "./Components/Layout/Tabs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Auth/Login";

function App() {
  return (
    <Playersstate>
      <Router>
        <Fragment>
          <div className='navigation'>
            <Navbar />
            {/* <Tabs /> */}
          </div>

          <Switch>
            <Route exact path='/' component={Playerform} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
          </Switch>
        </Fragment>
      </Router>
    </Playersstate>
  );
}

export default App;
