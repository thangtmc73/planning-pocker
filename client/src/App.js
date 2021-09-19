import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import socket from "./API/socket";
import Routing from "./containers/Routing";

import "./App.css";

function App() {
  useEffect(() => {
    socket.connect();
    return () => {
      socket.close();
    };
  }, []);

  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}

export default App;
