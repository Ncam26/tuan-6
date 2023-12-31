import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Screen01 from "./file/app";
import Screen02 from "./pages/Screen02";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal">
        <Stack.Screen
          options={{ headerShown: false }}
          name="app"
          component={Screen01}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Screen02"
          component={Screen02}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}