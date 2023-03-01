import { AppRegistry } from "react-native";
import App from "./App";

AppRegistry.registerComponent("MyApp", () => App);

AppRegistry.runApplication("MyApp", {
  initialProps: {},
  rootTag: document.getElementById("root"),
});
