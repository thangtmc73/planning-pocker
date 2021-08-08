import './App.css';

import { useEffect } from 'react';
import socket from "./API/socket";

function App() {
  useEffect(() => {
    socket.connect();
    return () => {
      socket.close();
    }
  }, []);

  function sendEvent() {
    socket.send("Con gà");
  }

  return (
    <div className="App">
      <button onClick={sendEvent}>Send event</button>
    </div>
  );
}

export default App;
