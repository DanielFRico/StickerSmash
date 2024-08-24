import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Profile, RecipeDetails, DragonBall } from "./src/screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

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
            options={{
              headerShown: false,
              tabBarLabel: "Recetas para goku",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="food" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="DragonBall"
            component={DragonBall}
            options={{
              tabBarLabel: "Dragon Ball",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="api" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: "Perfil",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="cat" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
