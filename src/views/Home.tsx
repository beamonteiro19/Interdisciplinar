import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import HeartIcon from '../images/icons/coracao.png';
import ChatIcon from '../images/icons/comentario.png';
import FavIcon from '../images/icons/estrela.png';
import ProfileIcon from '../images/icons/perfilhome.png';
import NotificationIcon from '../images/icons/sino.png';


const Home = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.profileContainer}>
        <Image source={HeartIcon} style={styles.actionIcon} />
          <Text style={styles.profileText}>D.A FATEC JD</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
        <Image source={NotificationIcon} style={styles.actionIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Bem-vindo à tela de início!</Text>
      </View>

      <View style={styles.postContainer}>
        <Text style={styles.username}>User1246658</Text>
        <Image source={{ uri: 'https://via.placeholder.com/300x200' }} style={styles.postImage} />
        <Text style={styles.postText}>Evento da InterFatecs 2024...</Text>
        <View style={styles.actionsContainer}>
        <Image source={HeartIcon} style={styles.actionIcon} />
        <Image source={ChatIcon} style={styles.actionIcon} />
        <Image source={FavIcon} style={styles.actionIcon} />
        </View>
      </View>

    </ScrollView>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#5D17EB',
    padding: 15,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5D17EB',
  },
  postContainer: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
  },
  username: {
    fontWeight: 'bold',
    color: '#5D17EB',
    marginBottom: 5,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  postText: {
    color: '#333',
    marginBottom: 10,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Home;
