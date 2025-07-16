package main

import (
	"log"
	"net/http"
	"strings"

	"github.com/chiyonn/gostox-research/internal/core"
	"github.com/chiyonn/gostox-research/internal/middleware"
	"github.com/chiyonn/gostox-research/internal/router"
)

func main() {
	cors := middleware.StrictCORSMiddleware( middleware.CORSOptions{
			AllowedOrigins: strings.Split(core.MustReadEnv("CORS_ALLOWED_ORIGINS"), ","),
			AllowedMethods: []string{"GET", "OPTIONS"},
			AllowedHeaders: []string{"Content-Type", "Authorization"},
	})

	apiRouter := cors(middleware.JSONContentTypeMiddleware(router.NewAPIRoutes()))
	// imageRouter := router.NewImageRoutes()

	mux := http.NewServeMux()
	mux.Handle("/api/", apiRouter)
	// mux.Handle("/images/", imageRouter)

	log.Fatal(http.ListenAndServe("0.0.0.0:8080", mux))
}
