import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import MusicScreen from "./src/screens/MusicScreen";
import AddEditScreen from "./src/screens/AddEditScreen";
import Styles from "./src/styles/Styles";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Music" component={MusicScreen} />
        <Stack.Screen name="AddMusic" component={AddEditScreen} options={{ title: 'Add Music' }} />
        <Stack.Screen name="EditMusic" component={AddEditScreen} options={{ title: 'Edit Music' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}