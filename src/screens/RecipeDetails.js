import React, { useState, useRef } from 'react';
import { Image, StyleSheet, Text, View, Button, Dimensions, TouchableOpacity, Modal, FlatList, ScrollView } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

//export const RecipeDetails = ({ navigation, recipe }) => {
export const RecipeDetails = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [authorVisible, setAuthorVisible] = useState(false);
  const [ingredientVisible, setIngredientVisible] = useState(false);
  const [activeIngredient, setActiveIngredient] = useState({});
  const carouselRef = useRef(null);

  const authorR1 = { name: "Pepito", picture: "pepito.jpg" };
  const ingredientsR1 = [
    { images: ["leche1.jpg", "leche2.jpg"], description: "3 tipos de leche" },
    { images: ["bizcocho.jpg"], description: "Bizcocho esponjoso" }
  ];
  const stepsR1 = [
    { image: "paso1.jpg", description: "Preparar el bizcocho" },
    { image: "paso2.jpg", description: "Mezclar las tres leches" },
    { image: "paso3.jpg", description: "Bañar el bizcocho con la mezcla" }
  ];
  const recipe = {
    name: "Tres leches",
    images: ["tresleches1.jpg", "tresleches2.jpg"],
    ingredients: ingredientsR1,
    stars: 4.5,
    author: authorR1,
    steps: stepsR1
  };

  const renderCarouselItem = ({ item, index }) => {
    return <CarouselItem item={item} index={index} />;
  };

  const goToSlide = (index) => {
    carouselRef.current.snapToItem(index);
  };

  const renderIngredientsItem = ({ item, index }) => (
    <TouchableOpacity style={styles.menuItem} onPress={() => renderingredient(item)}>
      <Text>{item.description}</Text>
    </TouchableOpacity>
  );

  const renderPagination = () => {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.paginationContainer}>
        {recipe.steps.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.paginationItem, activeIndex === index && styles.paginationItemActive]}
            onPress={() => goToSlide(index)}
          >
            <Text style={[styles.paginationText, activeIndex === index && styles.paginationTextActive]}>
              Paso {index + 1}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  const renderingredient = (ingredient) => {
    setActiveIngredient(ingredient);
    setIngredientVisible(true);
  }


  return (
    <ScrollView style={{ flex: 1, }}>
      <Text>Details Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <Carousel
          ref={carouselRef}
          data={recipe.steps}
          renderItem={renderCarouselItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
        {renderPagination()}
        <Text>
          Ingredientes:
        </Text>
        <FlatList
          data={recipe.ingredients}
          renderItem={renderIngredientsItem}
          keyExtractor={(item, index) => index.toString()}
          style={styles.flatListIngredients}
        />
        <Text>
          {`Calificacion : ${recipe.stars}`}
        </Text>
        <View>
          <TouchableOpacity onPress={() => setAuthorVisible(true)}>
            <Text>A cerca del autor : {recipe.author.name}</Text>
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={authorVisible}
          onRequestClose={() => setAuthorVisible(false)}
        >
          <View style={styles.modalView}>
            <Image
              style={styles.carouselItemImage}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
            <Text style={styles.carouselItemText}>{recipe.author.name}</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setAuthorVisible(false)}
            >
              <Text>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal
          animationType="fade"
          transparent={true}
          visible={ingredientVisible}
          onRequestClose={() => {
            setIngredientVisible(false);
            setActiveIngredient({});
          }}
        >
          <View style={styles.modalView}>
            <Image
              style={styles.carouselItemImage}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                setIngredientVisible(false);
                setActiveIngredient({});
              }}
            >
              <Text>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const CarouselItem = ({ item, index }) => {
  return (
    <View style={styles.carouselItem}>
      <Image
        style={styles.carouselItemImage}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Text style={styles.carouselItemText}>{item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30
  },
  carouselItem: {
    alignItems: 'center',
    backgroundColor: 'lightblue',
    borderRadius: 5,
    height: 200,
    padding: 50,
    marginLeft: 25,
    marginRight: 25,
  },
  carouselItemImage: {
    width: 100,
    height: 100
  },
  carouselItemText: {
    fontSize: 10,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationContainer: {
    marginBottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50
  },
  paginationItem: {
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
  },
  paginationItemActive: {
    backgroundColor: '#2196F3',
  },
  paginationText: {
    fontSize: 12,
    color: '#333',
  },
  paginationTextActive: {
    color: '#fff',
  },
  navigationButton: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginHorizontal: 10,
  },
  menuButton: {
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    marginHorizontal: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  menuItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    width: '100%',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#2196F3",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  flatListIngredients: {
    marginBottom: 50
  }
});
