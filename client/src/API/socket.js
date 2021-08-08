const HOST = "ws://127.0.0.1:8000/ws";

class SocketAPI {
  _connection = null;

  connect() {
    console.log("Attempting Connection...");

    if (this._connection === null) {
      this._connection = new WebSocket(HOST); 
    }

    this._connection.onopen = () => {
      console.log("Successfully Connected");
    };

    this._connection.onmessage = msg => {
      console.log(msg);
    };
  
    this._connection.onclose = event => {
      console.log("Socket Closed Connection: ", event);
    };
  
    this._connection.onerror = error => {
      console.log("Socket Error: ", error);
    };
  }

  send(message) {
    console.log("sending:", message);
    this._connection.send(message);
  };

  close() {
    this._connection.close();
  }
}

const socketInstance = new SocketAPI();
export default socketInstance;
