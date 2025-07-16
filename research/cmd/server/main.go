package main

import (
	"log"
	"net/http"

	"github.com/chiyonn/gostox-research/internal/router"
)

func main() {
	r := router.New()

	addr := "0.0.0.0:8080"
	log.Printf("Server starting at http://localhost%s", addr)
	if err := http.ListenAndServe(addr, r); err != nil {
		log.Fatalf("Server failed: %v", err)
	}
}
