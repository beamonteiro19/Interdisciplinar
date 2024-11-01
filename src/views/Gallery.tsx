import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Gallery = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const galleryData = Array.from({ length: 30 }).map((_, index) => ({
    id: index.toString(),
    image: require('../images/galeria.png'),
  }));

  const renderGalleryItem = ({ item }) => (
    <View style={styles.galleryItem}>
      <Image source={item.image} style={styles.galleryIcon} />
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <Image source={require('../images/voltar.png')} style={styles.backIcon} />
      </TouchableOpacity>

      <Image source={require('../images/AtleticaImg.png')} style={styles.logo} />

      <Text style={styles.title}>GALERIA</Text>

      <FlatList
        data={galleryData}
        renderItem={renderGalleryItem}
        keyExtractor={(item) => item.id}
        numColumns={4}
        contentContainerStyle={styles.galleryContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginVertical: 20,
  },
  galleryContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  galleryItem: {
    width: 60,
    height: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD700', 
    borderRadius: 8,
  },
  galleryIcon: {
    width: 40,
    height: 40,
    tintColor: 'white', 
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  logo: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default Gallery;
