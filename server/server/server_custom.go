package server
import (
  "fmt"
  "log"
  "github.com/gorilla/websocket"
  "net/http"
)

type customServer struct {
  upgrader *websocket.Upgrader
}

func NewServer() *customServer {
  server := &customServer{
    upgrader: &websocket.Upgrader{
      ReadBufferSize:  1024,
      WriteBufferSize: 1024,

      // We'll need to check the origin of our connection
      // this will allow us to make requests from our React
      // development server to here.
      // For now, we'll do no checking and just allow any connection
      CheckOrigin: func(r *http.Request) bool { return true },
    },
  }
  return server
}

func reader(conn *websocket.Conn) {
  for {
    messageType, p, readErr := conn.ReadMessage()

    if readErr != nil {
      log.Println(readErr)
      return
    }

    fmt.Println((string(p)))
    writeErr := conn.WriteMessage(messageType, p)
    if writeErr != nil {
      log.Println(writeErr)
      return
    }
  }
}

// define our WebSocket endpoint
func (s *customServer) serveWs(w http.ResponseWriter, r *http.Request) {
  fmt.Println(r.Host)

  // upgrade this connection to a WebSocket
  // connection
  ws, err := s.upgrader.Upgrade(w, r, nil)
  if err != nil {
    log.Println(err)
  }
  // listen indefinitely for new messages coming
  // through on our WebSocket connection
  reader(ws)
}

func (s *customServer) SetupRoutes() {
  http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Simple Server")
  })
  // mape our `/ws` endpoint to the `serveWs` function
  http.HandleFunc("/ws", s.serveWs)
}
