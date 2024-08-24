import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const renderItem = ({ item }) => {
  return (
    <View>
      <Text>{item.name}</Text>
    </View>
  );
};

export const DragonBall = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const response = await fetch("https://dragonball-api.com/api/characters");
      if (!response.ok) return;
      const data = await response.json();
      setCharacters(data.items);
    };
    getCharacters();
  }, []);

  return (
    <FlatList
      data={characters}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({});
