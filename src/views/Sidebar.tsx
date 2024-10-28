import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import ProfileIcon from '../images/icons/perfilHome.png'; 
import InfoIcon from '../images/icons/infoIcon.png'; 
import AthleticIcon from '../images/icons/logoAtletica.png';

const Sidebar = ({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <TouchableOpacity style={styles.overlay} onPress={onClose}>
        <View style={styles.sidebarContainer}>
          <View style={styles.header}>
            <Image source={ProfileIcon} style={styles.profileIcon} />
            <Text style={styles.title}>D.A FATEC JD</Text>
          </View>
          
          <View style={styles.menuItems}>
            <View style={styles.menuItem}>
              <Image source={InfoIcon} style={styles.icon} />
              <Text style={styles.menuText}>Sobre o D.A</Text>
            </View>
            <View style={styles.menuItem}>
              <Image source={AthleticIcon} style={styles.icon} />
              <Text style={styles.menuText}>Atlética JD</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
  },
  sidebarContainer: {
    width: '70%',
    height: '100%',
    backgroundColor: '#FFF',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5D17EB',
  },
  menuItems: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Sidebar;