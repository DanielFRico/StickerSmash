import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { recipes } from "../../recipes";

export const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("RecipeDetails")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
