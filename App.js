import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Profile, RecipeDetails } from "./src/screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="HomeStack">
          <Tab.Screen
            name="HomeStack"
            component={HomeStack}
            options={{ headerShown: false }}
          />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
