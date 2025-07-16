package core

import (
	"fmt"
	"os"
	"strings"
)

func ReadEnv(key string) (string, error) {
	value := os.Getenv(key)
	if value == "" {
		return value, fmt.Errorf("%s was empty", key)
	}

	return value, nil
}

func MustReadEnv(key string) string {
	value, err := ReadEnv(key)
	if err != nil {
		panic(fmt.Sprintf("could not read env value '%s': %v", key, err))
	}
	return strings.TrimSpace(value)
}
