import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ChatModal from '../views/ChatModal';
import Sidebar from '../views/Sidebar';
import ChatIcon from '../images/icons/comentario.png';
import ExitIcon from '../images/icons/sair.png';
import CalendarIcon from '../images/icons/calendario.png';
import CanetaUsuarioIcon from '../images/icons/caneta-do-usuario.png';
import MenuOptionsIcon from '../images/icons/menuOptions.png';
import ProfileIcon from '../images/icons/perfilHome.png';
import ProfileIconPost from '../images/icons/perfil.png';

export const ItensMenu = () => {
  const navigation = useNavigation();

  //const navigateToEvents = (type: string) => {
  // navigation.navigate('Eventos', { eventType: type });
  // };
  return (
    <View style={{ backgroundColor: '#5D17EB', borderRadius: 10, alignItems: 'center', justifyContent: 'space-evenly', width: 174, height: 130 }}>
      <TouchableOpacity onPress={() => navigation.navigate('EditarEvento')} style={{ width: '100%', alignItems: 'center', borderBottomColor: 'white', borderBottomWidth: 2, height: 54, justifyContent: 'center' }}>
        <Text style={{ fontSize: 22, textAlign: 'center', color: 'white', fontFamily: 'Bryndan Write_fix' }}>Editar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Meus eventos")} style={{ width: '100%', alignItems: 'center', height: 54, justifyContent: 'center' }}>
        <Text style={{ fontSize: 22, textAlign: 'center', color: 'white', fontFamily: 'Bryndan Write_fix' }}>Excluir</Text>
      </TouchableOpacity>
    </View>
  )
}

const Profile = () => {
  const navigation = useNavigation();
  const [chatVisible, setChatVisible] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [menu, setMenu] = useState(false);

  function mostrarMenu() {
    setMenu(!menu);
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.profileContainer}>
          <View style={styles.profileIconContainer}>
            <Image source={ProfileIcon} style={styles.profileIcon} />
          </View>
          <Text style={styles.profileText}>Usuário</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Calendar')}>
          <Image source={CalendarIcon} style={styles.calendarIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Exit')}>
          <Image source={ExitIcon} style={styles.exitIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <Text style={styles.postPrincipal}>Descrição Perfil</Text>
          <TouchableOpacity>
            <Image source={CanetaUsuarioIcon} style={styles.canetaUsuarioIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.postPrincipal}>Minhas pubicações:</Text>


      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <View style={styles.postProfileIconContainer}>
            <Image source={ProfileIconPost} style={styles.profilePostIcon} />
          </View>
          <Text style={styles.username}>User1246658</Text>

          <TouchableOpacity style={styles.menuContainer} onPress={mostrarMenu}>
            <Image source={require('../images/icons/menuOptions.png')} style={styles.menu} />
          </TouchableOpacity>

          {menu && (
            <View style={styles.menuDropdown}>
              <ItensMenu />
            </View>
          )}
        </View>
        <Image source={{ uri: 'https://via.placeholder.com/300x200' }} style={styles.postImage} />
        <Text style={styles.postText}>Descrição da publicação...</Text>
        <View style={styles.actionsContainer}>
          <TouchableOpacity onPress={() => setChatVisible(true)}>
            <Image source={ChatIcon} style={styles.actionIcon} />
          </TouchableOpacity>
        </View>
      </View>



      {/* Modais */}
      <ChatModal visible={chatVisible} onClose={() => setChatVisible(false)} />
      <Sidebar visible={sidebarVisible} onClose={() => setSidebarVisible(false)} />
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
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Espaço uniforme entre itens
    marginBottom: 5,
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
  menu: {
    alignSelf: 'flex-end',
    marginTop: 10
  },
  menuContainer: {
    alignSelf: 'center', // Centraliza o botão do menu na mesma linha
    marginLeft: 'auto',  // Empurra para o final do container
  },
  menuDropdown: {
    marginTop: 10,
    zIndex: 10,
    position: 'absolute',
    right: 5,
    top: 15,
    elevation: 10,
    pointerEvents: 'box-none',
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
  postPrincipal: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
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
  exitIcon: {
    width: 30,
    height: 30,
    tintColor: '#FFF',
  },
  calendarIcon: {
    width: 30,
    height: 30,
    tintColor: '#FFF',
  },
  menuOptionsIcon: {
    width: 25,
    height: 6,
    marginLeft: 140,
  },
  canetaUsuarioIcon: {
    width: 20,
    height: 20,
    marginLeft: 140,
  },
});

export default Profile;