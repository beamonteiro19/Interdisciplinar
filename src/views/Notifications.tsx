import React, { memo } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BellIcon from '../images/icons/notificacao.png';
import ClockIcon from '../images/icons/alarme.png';
import CancelIcon from '../images/icons/cancelar.png';
import BackIcon from '../images/icons/setaEsquerda.png'; 

const Notifications = memo(() => {
  const navigation = useNavigation();

  const notifications = [
    { id: 1, icon: ClockIcon, text: 'O evento "Interfatec - jogo de futsal" que você declarou interesse está chegando.' },
    { id: 2, icon: CancelIcon, text: 'O evento "Interfatec - jogo de futsal" que você declarou interesse foi cancelado.' },
    { id: 3, icon: BellIcon, text: 'Novo evento publicado na aba "EVENTOS".' },
    { id: 4, icon: ClockIcon, text: 'O evento "Interfatec - jogo de futsal" que você declarou interesse está chegando.' },
    { id: 5, icon: CancelIcon, text: 'O evento "Interfatec - jogo de futsal" que você declarou interesse foi cancelado.' },
    { id: 6, icon: BellIcon, text: 'Novo evento publicado na aba "EVENTOS".' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image source={BackIcon} style={styles.backIcon} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.notificationsList}>
        {notifications.map((notification) => (
          <View key={notification.id} style={styles.notificationItem}>
            <Image source={notification.icon} style={styles.notificationIcon} />
            <Text style={styles.notificationText}>{notification.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  backButton: {
    marginRight: 10,
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5D17EB',
    textAlign: 'center',
    flex: 1,
  },
  notificationsList: {
    paddingHorizontal: 15,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#5D17EB',
    borderRadius: 8,
    marginBottom: 10,
  },
  notificationIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  notificationText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});

export default Notifications;
