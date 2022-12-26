package backend

import (
	"log"

	"github.com/pocketbase/pocketbase"
)

func Start() {
	app := pocketbase.New()
	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}
