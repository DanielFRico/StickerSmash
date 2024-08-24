import { View, Text, Button, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity } from "react-native";
import React, { startTransition } from "react";
import { recipes } from "../../recipes";

// Datos de ejemplo

const CountryItem = ({ item, onPress }) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <Image source={{ uri: item.flag }} style={styles.flag} />
    <View style={styles.info}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.capital}>{item.category}</Text>
      <Text style={styles.start}>
        Estrellas: {item.stars}
      </Text>
      <Text style={styles.author}>
        Autor: {item.author}
      </Text>
    </View>
  </TouchableOpacity>
);


const renderItem = ({ item }) => (
  <CountryItem
    item={item}
    onPress={() => console.log(`País seleccionado: ${JSON.stringify(item)}`)}
  />
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  listContent: {
    padding: 16,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 18,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#491010',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 3,
  },
  flag: {
    width: 100,
    height: 80,
    marginRight: 16,
    borderRadius: 4,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  ingredients: {
    fontSize: 16,
    color: '#666',
    marginBottom: 2,
  },
  author: {
    fontSize: 14,
    color: '#888',
  },
  start: {
    fontSize: 14,
    color: '#f1e532',
  },
});


export const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

