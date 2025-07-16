package router

import (
	"net/http"

	"github.com/chiyonn/gostox-research/internal/handler"
)


func New() http.Handler {
	mux := http.NewServeMux()

	mux.HandleFunc("/health", handler.HealthHandler)

	return mux
}

