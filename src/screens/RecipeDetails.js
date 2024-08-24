import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export const RecipeDetails = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Text>{route.params.id}</Text>
      <Text>{route.params.name}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({});
