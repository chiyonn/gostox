package handler

import (
	"encoding/json"
	"net/http"
)

type HealthResponse struct {
	Status bool `json:"status"`
}

func HealthHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Method Not Allowed", http.StatusMethodNotAllowed)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	response := HealthResponse{Status: true}
	json.NewEncoder(w).Encode(response)
}
