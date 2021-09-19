import React from "react";
import socket from "../../API/socket";

function HomePage() {
  function sendEvent() {
    socket.send("Con gà");
  }
  return (
    <div>
      <button onClick={sendEvent}>Send event</button>
    </div>
  );
}

export default HomePage;
