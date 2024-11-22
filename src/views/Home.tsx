import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ChatModal from '../views/ChatModal';
import Sidebar from '../views/Sidebar';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = () => {
  const navigation = useNavigation();
  const [chatVisible, setChatVisible] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.profileContainer}>
          <View style={styles.profileIconContainer}>
            <Ionicons name="person-outline" size={30} color="#000000" />
          </View>
          <Text style={styles.profileText}>D.A FATEC JD</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <Ionicons
            name="notifications-outline"
            size={30}
            color="#FFF"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => setSidebarVisible(true)}>
          <Ionicons
            name="menu-outline"
            size={30}
            color="#FFF"
            style={styles.menuIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <View style={styles.postProfileIconContainer}>
            <Ionicons name="person-outline" size={14} color="#000000" />
          </View>
          <Text style={styles.username}>User1246658</Text>
        </View>
        <Image
          source={{uri: 'https://via.placeholder.com/300x200'}}
          style={styles.postImage}
        />
        <Text style={styles.postText}>Evento da InterFatecs 2024...</Text>
        <View style={styles.actionsContainer}>
          <TouchableOpacity onPress={() => setChatVisible(true)}>
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={30}
              color="#5D17EB"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Modais */}
      <ChatModal visible={chatVisible} onClose={() => setChatVisible(false)} />
      <Sidebar
        visible={sidebarVisible}
        onClose={() => setSidebarVisible(false)}
      />
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
  profileText: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'Bryndan Write_fix',
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
  username: {
    color: 'black',
    fontFamily: 'Bryndan Write_fix',
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
    fontFamily: 'Bryndan Write_fix',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
  },
  menuIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    color: '#5D17EB',
  },
});

export default Home;