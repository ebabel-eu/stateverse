import { useState } from 'react';
import './App.css';
import CreatePlayer from './components/CreatePlayer';
import Player from './components/Player';

function App() {
  const [players, setPlayers] = useState([]);

  function onCreatePlayer(newPlayer) {
    setPlayers([...players, newPlayer]);
  }

  return (
    <>
      <CreatePlayer onSubmit={onCreatePlayer} />
      {
        players.map(player => <Player key={player.id} {...player} />)
      }
    </>
  );
}

export default App;
