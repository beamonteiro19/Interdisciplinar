import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HeartIcon from '../images/icons/coracao.png';
import ChatIcon from '../images/icons/comentario.png';
import FavIcon from '../images/icons/estrela.png';
import NotificationIcon from '../images/icons/sino.png';
import MenuIcon from '../images/icons/menu-hamburguer.png'; 
import ProfileIcon from '../images/icons/perfilHome.png';
import ProfileIconPost from '../images/icons/perfil.png';

const Home = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho com ícone de perfil e notificação */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.profileContainer}>
          <View style={styles.profileIconContainer}>
            <Image source={ProfileIcon} style={styles.profileIcon} />
          </View>
          <Text style={styles.profileText}>USER_484165</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <Image source={NotificationIcon} style={styles.notificationIcon} />
        </TouchableOpacity>
      </View>

      {/* Menu lateral hambúrguer */}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuButton}>
          <Image source={MenuIcon} style={styles.actionIcon} />
        </TouchableOpacity>
      </View>

      {/* Post de exemplo */}
      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <View style={styles.postProfileIconContainer}>
            <Image source={ProfileIconPost} style={styles.profilePostIcon} />
          </View>
          <Text style={styles.username}>User1246658</Text>
        </View>
        <Image source={{ uri: 'https://via.placeholder.com/300x200' }} style={styles.postImage} />
        <Text style={styles.postText}>Evento da InterFatecs 2024...</Text>
        <View style={styles.actionsContainer}>
          <TouchableOpacity>
            <Image source={HeartIcon} style={styles.actionIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={ChatIcon} style={styles.actionIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={FavIcon} style={styles.favIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

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
  profileIconContainer: {
    backgroundColor: '#D9D9D9', 
    borderRadius: 20, 
    padding: 5, 
  },
  profileIcon: {
    width: 30,
    height: 30,
  },
  profilePostIcon: {
    width: 14,
    height: 14,
  },
  profileText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  menuContainer: {
    alignItems: 'flex-start',
    paddingHorizontal: 15,
    marginTop: 10,
  },
  menuButton: {
    padding: 10,
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
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  postProfileIconContainer: {
    backgroundColor: '#D9D9D9', 
    borderRadius: 20,
    padding: 5, 
    marginRight: 8, 
    borderWidth: 1, 
    borderColor: '#5D17EB',
  },
  postProfileIcon: {
    width: 30,
    height: 30,
  },
  username: {
    fontWeight: 'bold',
    color: '#5D17EB',
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
    justifyContent: 'flex-start',
    paddingHorizontal: 10, 
},
actionIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
},
favIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    marginLeft: 230,
},
  notificationIcon: {
    width: 30,
    height: 30,
    tintColor: '#FFF',
  },
});

export default Home;
