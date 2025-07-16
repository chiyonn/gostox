package middleware

import (
	"net/http"
)

type CORSOptions struct {
	AllowedOrigins []string
	AllowedMethods []string
	AllowedHeaders []string
}

// StrictCORSMiddleware returns a middleware that enforces strict CORS policy
func StrictCORSMiddleware(opts CORSOptions) func(http.Handler) http.Handler {
	allowedOriginSet := make(map[string]struct{})
	for _, origin := range opts.AllowedOrigins {
		allowedOriginSet[origin] = struct{}{}
	}

	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			origin := r.Header.Get("Origin")
			if origin == "" {
				// CORSヘッダが不要なリクエスト（例：同一オリジン or curl）
				next.ServeHTTP(w, r)
				return
			}

			// オリジンチェック
			if _, ok := allowedOriginSet[origin]; !ok {
				http.Error(w, "CORS origin not allowed", http.StatusForbidden)
				return
			}

			// CORSヘッダ追加
			w.Header().Set("Access-Control-Allow-Origin", origin)
			w.Header().Set("Vary", "Origin")

			if r.Method == http.MethodOptions {
				// プリフライトリクエストに対応
				w.Header().Set("Access-Control-Allow-Methods", headerJoin(opts.AllowedMethods))
				w.Header().Set("Access-Control-Allow-Headers", headerJoin(opts.AllowedHeaders))
				w.WriteHeader(http.StatusNoContent)
				return
			}

			next.ServeHTTP(w, r)
		})
	}
}

func headerJoin(values []string) string {
	result := ""
	for i, v := range values {
		if i > 0 {
			result += ", "
		}
		result += v
	}
	return result
}

