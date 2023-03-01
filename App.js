import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoginContainer from "./src/screens/LoginContainer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginEmail from "./src/screens/LoginEmail";
import Home from "./src/screens/HomeContainer";
import SignUpEmail from "./src/screens/SignUpEmail";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginContainer"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LoginContainer" component={LoginContainer} />
        <Stack.Screen name="LoginEmail" component={LoginEmail} />
        <Stack.Screen name="SignUpContainer" component={SignUpEmail} />
        <Stack.Screen name="HomeContainer" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
