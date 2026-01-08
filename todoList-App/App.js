import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import store from "./store"
import LoginScreen from "./src/screens/loginScreen";
import HomeScreen from "./src/screens/HomeScreen"

const Stack = createNativeStackNavigator()

export default function App(){
  return(
    <Provider store={store}>
        <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name= "Home" component={HomeScreen}/>
        {/* <Stack.Screen/> */}
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}