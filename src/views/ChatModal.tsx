import React, { memo } from 'react';
import { View, Text, Image, ScrollView, TextInput, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import ProfileIconPost from '../images/icons/perfilHome.png';
import ChatIcon from '../images/icons/comentario.png';

const ChatModal =  memo({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <TouchableOpacity style={styles.chatOverlay} onPress={onClose} activeOpacity={1}>
        <TouchableOpacity style={styles.chatContainer} activeOpacity={1}>
          <Text style={styles.chatTitle}>Comentários</Text>
          <ScrollView style={styles.chatMessages}>
            {[...Array(5)].map((_, i) => (
              <View key={i} style={styles.chatMessage}>
                <Image source={ProfileIconPost} style={styles.chatUserIcon} />
                <Text style={styles.chatMessageText}>
                  Username{` `} <Text style={{ fontWeight: '400' }}>Comentário exemplo para testes e visualização.</Text>
                </Text>
              </View>
            ))}
          </ScrollView>
          <View style={styles.chatInputContainer}>
            <Image source={ChatIcon} style={styles.chatInputIcon} />
            <TextInput placeholder="Adicione um comentário..." style={styles.chatInput} />
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  chatOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  chatContainer: { 
    backgroundColor: '#FFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 15,
    maxHeight: '80%',
  },
  chatTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5D17EB',
    marginBottom: 15,
  },
  chatMessages: {
    marginBottom: 15,
  },
  chatMessage: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  chatUserIcon: {
    backgroundColor: '#D9D9D9', 
    borderRadius: 20,
    padding: 5,
    marginRight: 10, 
    width: 25,
    height: 25,
  },
  chatMessageText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  chatInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
    paddingTop: 10,
  },
  chatInputIcon: {
    width: 25,
    height: 25,
  },
  chatInput: {
    flex: 1,
    fontSize: 14,
  },
});

export default ChatModal;
