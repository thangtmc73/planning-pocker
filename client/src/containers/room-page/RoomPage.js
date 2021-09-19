import React from "react";
import { useParams } from "react-router-dom";

function RoomPage() {
  const { roomId } = useParams();
  return <div>Room {roomId}</div>;
}

export default RoomPage;
