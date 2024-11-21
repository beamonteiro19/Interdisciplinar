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
import { Overlay } from '@rneui/themed';
import { Button } from "@rneui/themed";

export const MenuPost = ({ closeMenu, setDeleteModalVisible }: { closeMenu: () => void; setDeleteModalVisible: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: '#5D17EB',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: 174,
        height: 130,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          closeMenu();
          navigation.navigate('EditarEvento');
        }}
        style={{
          width: '100%',
          alignItems: 'center',
          borderBottomColor: 'white',
          borderBottomWidth: 2,
          height: 54,
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 22,
            textAlign: 'center',
            color: 'white',
            fontFamily: 'Bryndan Write_fix',
          }}
        >
          Editar
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          closeMenu();
          setDeleteModalVisible(true); // Abre o modal de exclusão
        }}
        style={{ width: '100%', alignItems: 'center', height: 54, justifyContent: 'center' }}
      >
        <Text
          style={{
            fontSize: 22,
            textAlign: 'center',
            color: 'white',
            fontFamily: 'Bryndan Write_fix',
          }}
        >
          Excluir
        </Text>
      </TouchableOpacity>

    </View>  
  );
};

export const MenuExit = ({ closeMenu, setExitModalVisible }: { closeMenu: () => void; setExitModalVisible: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: '#5D17EB',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: 174,
        height: 130,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          closeMenu();
          setExitModalVisible(true); // Abre o modal de sair da conta
        }}
        style={{ width: '100%', alignItems: 'center', height: 54, justifyContent: 'center' }}
      >
        <Text
          style={{
            fontSize: 22,
            textAlign: 'center',
            color: 'white',
            fontFamily: 'Bryndan Write_fix',
          }}
        >
          Sair da conta
        </Text>
      </TouchableOpacity>

    </View>  
  );
};

const Profile = () => {
  const navigation = useNavigation();
  const [chatVisible, setChatVisible] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [isExitModalVisible, setExitModalVisible] = useState(false);

  const toggleChatModal = () => {
    setMenuVisible(false); // Fecha o menu ao abrir o chat
    setChatVisible(!chatVisible);
  };

  const toggleSidebar = () => {
    setMenuVisible(false); // Fecha o menu ao abrir a sidebar
    setSidebarVisible(!sidebarVisible);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('FormEvento')} style={styles.profileContainer}>
          <View style={styles.profileIconContainer}>
            <Image source={ProfileIcon} style={styles.profileIcon} />
          </View>
          <Text style={styles.profileText}>USER_484165</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Calendar')}>
          <Image source={CalendarIcon} style={styles.calendarIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setExitModalVisible(true)}>
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

      <Text style={{marginLeft:15}}>Minhas publicações:</Text>

      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <View style={styles.postProfileIconContainer}>
            <Image source={ProfileIconPost} style={styles.profilePostIcon} />
          </View>
          <Text style={styles.username}>User1246658</Text>
          <TouchableOpacity style={styles.menuContainer} onPress={toggleMenu}>
            <Image source={MenuOptionsIcon} style={styles.menu} />
          </TouchableOpacity>

          {menuVisible && (
            <View style={styles.menuDropdown}>
              <MenuPost
                closeMenu={toggleMenu}
                setDeleteModalVisible={setDeleteModalVisible}
              />
            </View>
          )}
        </View>
        <Image source={{ uri: 'https://via.placeholder.com/300x200' }} style={styles.postImage} />
        <Text style={styles.postText}>Descrição da publicação...</Text>
        <View style={styles.actionsContainer}>
          <TouchableOpacity onPress={toggleChatModal}>
            <Image source={ChatIcon} style={styles.actionIcon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Modais */}
      <ChatModal visible={chatVisible} onClose={toggleChatModal} />
      <Sidebar visible={sidebarVisible} onClose={toggleSidebar} />

      {/* Modal de Sair da conta */}
<Overlay
  isVisible={isExitModalVisible}
  onBackdropPress={() => setExitModalVisible(false)}
  overlayStyle={{
    width: '100%',
    height: '25%',
    justifyContent: 'flex-start',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    top: '40%',
  }}
>
  <View
    style={{
      width: '100%',
      height: '90%',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 15,
      rowGap: 30,
      top: 10,
    }}
  >
    <Text
      style={{
        color: 'black',
        textAlign: 'center',
        fontSize: 24,
        fontFamily: 'Bryndan Write_fix',
      }}
    >
      Deseja sair da conta?
    </Text>
    <View style={{ flexDirection: 'row', columnGap: 35 }}>
      <Button
        title={'Cancelar'}
        onPress={() => setExitModalVisible(false)}
        buttonStyle={{
          height: 48,
          borderRadius: 30,
          width: 140,
          backgroundColor: 'white',
          borderColor: '#5D17EB',
          borderWidth: 1,
        }}
        titleStyle={{
          fontSize: 20,
          height: 30,
          color: '#5D17EB',
        }}
      />
      <Button
        title={'Sair'}
        buttonStyle={{
          height: 48,
          borderRadius: 30,
          width: 140,
          backgroundColor: '#5D17EB',
        }}
        titleStyle={{
          fontSize: 20,
          height: 30,
        }}
      />
    </View>
  </View>
</Overlay>

      {/* Modal de Exclusão */}
<Overlay
  isVisible={isDeleteModalVisible}
  onBackdropPress={() => setDeleteModalVisible(false)}
  overlayStyle={{
    width: '100%',
    height: '25%',
    justifyContent: 'flex-start',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    top: '40%',
  }}
>
  <View
    style={{
      width: '100%',
      height: '90%',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 15,
      rowGap: 30,
      top: 10,
    }}
  >
    <Text
      style={{
        color: 'black',
        textAlign: 'center',
        fontSize: 24,
        fontFamily: 'Bryndan Write_fix',
      }}
    >
      Excluir publicação?
    </Text>
    <View style={{ flexDirection: 'row', columnGap: 35 }}>
      <Button
        title={'Cancelar'}
        onPress={() => setDeleteModalVisible(false)}
        buttonStyle={{
          height: 48,
          borderRadius: 30,
          width: 140,
          backgroundColor: 'white',
          borderColor: '#5D17EB',
          borderWidth: 1,
        }}
        titleStyle={{
          fontSize: 20,
          height: 30,
          color: '#5D17EB',
        }}
      />
      <Button
        title={'Excluir'}
        onPress={() => console.log('Excluído!')}
        buttonStyle={{
          height: 48,
          borderRadius: 30,
          width: 140,
          backgroundColor: '#5D17EB',
        }}
        titleStyle={{
          fontSize: 20,
          height: 30,
        }}
      />
    </View>
  </View>
</Overlay>
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
  profileText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  menuContainer: {
    alignSelf: 'center',
    marginLeft: 'auto',
  },
  menuDropdown: {
    marginTop: 10,
    zIndex: 10,
    position: 'absolute',
    right: 5,
    top: 15,
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
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
    justifyContent: 'space-between',
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
  profilePostIcon: {
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
  canetaUsuarioIcon: {
    width: 20,
    height: 20,
  },
  buttonPresenca:{
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: '#5D17EB',
    borderWidth: 1,
    padding: 3,
    width: 201,
    paddingHorizontal: 5,
    height: 45
   },
});

export default Profile;