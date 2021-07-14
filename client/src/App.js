import './App.css';
import './main.css';
import Playeritems from './Components/player/Playeritems'
import Navbar from './Components/Layout/Navbar';
import Playerform from './Components/player/playerform';

function App() {
  return (
    <>
      <Navbar />
      <Playerform />
      <Playeritems />
    </>
  );
}

export default App;
