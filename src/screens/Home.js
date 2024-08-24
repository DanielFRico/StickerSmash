import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
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
        Autor: {item.author.name} {item.author.lastname}
      </Text>
    </View>
  </TouchableOpacity>
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

/*const renderItem = ({ item, navigation }) => (
  <CountryItem
    item={item}
    onPress={() => navigation.navigate('RecipeDetails', {id: item.id})}
  />
);*/

export const Home = ({ navigation }) => {
    
  const renderItem = ({item}) => (
    <CountryItem
      item={item}
      onPress={() => {
        navigation.navigate('RecipeDetails', {id: item.id, name: item.name})
        console.log(`Receta ${item.name} id:${item.id}`)
      }}
    />
  );
  
  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
//        renderItem={({item})=>renderItem({item, navigation})}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

