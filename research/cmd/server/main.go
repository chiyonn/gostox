package main

import (
	"log"
	"net/http"

	"github.com/chiyonn/gostox-research/internal/middleware"
	"github.com/chiyonn/gostox-research/internal/router"
)

func main() {
	apiRouter := middleware.JSONContentTypeMiddleware(router.NewAPIRoutes())
	//imageRouter := router.NewImageRoutes()

	mux := http.NewServeMux()
	mux.Handle("/api/", apiRouter)
	//mux.Handle("/images/", imageRouter)

	log.Fatal(http.ListenAndServe("0.0.0.0:8080", mux))
}
