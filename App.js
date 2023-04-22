import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";
import Verification from "./src/screens/Verification";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          options={{
            customAnimationOnGesture: true,
            animation: "slide_from_right",
          }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{
            customAnimationOnGesture: true,
            animation: "slide_from_right",
          }}
          name="Signup"
          component={Signup}
        />
        <Stack.Screen
          options={{
            customAnimationOnGesture: true,
            animation: "slide_from_right",
          }}
          name="Verification"
          component={Verification}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
