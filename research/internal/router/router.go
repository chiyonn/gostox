package router

import (
	"net/http"

	"github.com/chiyonn/gostox-research/internal/handler"
)


func NewAPIRoutes() http.Handler {
	mux := http.NewServeMux()
	mux.HandleFunc("/api/health", handler.HealthHandler)
	return mux
}

func NewImageRoutes() http.Handler {
	mux := http.NewServeMux()
	mux.Handle("/images/", http.StripPrefix("/images/", http.FileServer(http.Dir("./images"))))
	return mux
}
