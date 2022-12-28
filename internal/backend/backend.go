package backend

import (
	"log"
	"os"

	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/apis"
	"github.com/pocketbase/pocketbase/core"
)

func Start() {
	app := pocketbase.New()

	setup(app)

	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}

// Setup Pocketbase, i.e., register all hooks etc.
func setup(app *pocketbase.PocketBase) {
	app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
		// serves static files from the provided public dir (if exists)
		e.Router.GET("/*", apis.StaticDirectoryHandler(os.DirFS("pb_public"), false))
		return nil
	})
}
