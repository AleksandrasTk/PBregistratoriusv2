import './App.css';
import './main.css';
import Playeritems from './Components/player/Playeritems';
import Navbar from './Components/Layout/Navbar';
import Playerform from './Components/player/playerform';
import Playersstate from './Context/Players/PlayersState';

function App() {
  return (
    <Playersstate>
      <Navbar />
      <Playerform />
      <Playeritems />
    </Playersstate>
  );
}

export default App;
