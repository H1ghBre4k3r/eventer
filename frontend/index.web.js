import "react-native-gesture-handler";

import { AppRegistry } from "react-native";
import { App } from "./App";

// Start app
const appName = "Eventer";

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
    initialProps: {},
    rootTag: document.getElementById("app-root"),
});
