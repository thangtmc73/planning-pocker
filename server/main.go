package main

import (
	"log"
	"net/http"
	"planning-pocker/server"
)

func main() {
	server := server.NewServer()
	server.SetupRoutes()
	log.Println("Serving at localhost:8000...")
	log.Fatal(http.ListenAndServe(":8000", nil))
}
