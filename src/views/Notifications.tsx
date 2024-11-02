import React, { memo } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import BellIcon from '../images/icons/sino.png'; // Ícone de notificação (exemplo)
import ClockIcon from '../images/icons/alarme.png'; // Ícone de evento próximo
import CancelIcon from '../images/icons/cancelar.png'; // Ícone de cancelamento

const Notifications = memo(() => {
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
      <Text style={styles.headerText}>D.A FATEC JD</Text>
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
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5D17EB',
    textAlign: 'center',
    marginBottom: 10,
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
