import React, { useState } from "react";
import { useParams } from "react-router-dom";

function RoomPage() {
  const { roomId } = useParams();
  const [nameSubmitded, setNameSubmitted] = useState(false);
  const [name, setName] = useState("");

  function handleNameChange(event) {
    setName(event?.target?.value);
  }

  function handleSubmitClick() {
    setNameSubmitted(true);
  }

  if (!nameSubmitded) {
    return (
      <div>
        <h1>Room {roomId}</h1>
        <input
          placeholder="Type your name"
          value={name}
          onChange={handleNameChange}
        />
        <button onClick={handleSubmitClick}>Submit</button>
      </div>
    );
  }
  return <div>{name}</div>;
}

export default RoomPage;
