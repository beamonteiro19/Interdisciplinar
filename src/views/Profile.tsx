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

const Profile = () => {
  const navigation = useNavigation();
  const [chatVisible, setChatVisible] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

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
        
            <TouchableOpacity>
            <Image source={MenuOptionsIcon} style={styles.menuOptionsIcon} />
          </TouchableOpacity>

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
    
