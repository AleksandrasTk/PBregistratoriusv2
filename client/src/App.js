import "./App.css";
import "./main.css";
// import Playeritems from "./Components/player/Playeritems";
import Navbar from "./Components/Layout/Navbar";
// import Playerform from "./Components/player/Playerform";
import Playersstate from "./Context/Players/PlayersState";
// import Landing from './Components/Layout/Landing';
// import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
// import Tabs from "./Components/Layout/Tabs";

function App() {
  return (
    <Playersstate>
      <div className='navigation'>
        <Navbar />
        {/* <Tabs /> */}
      </div>
      {/* <Playerform />
      <Playeritems /> */}
      <Register />
      {/* <Login /> */}
    </Playersstate>
  );
}

export default App;
