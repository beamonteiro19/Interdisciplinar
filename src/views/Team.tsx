import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Team = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Quero fazer parte</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.scrollContainer}>   
        <View style={styles.memberContainer}>
          <View style={styles.iconContainer}>
            <Image source={require('../images/perfil.png')} style={styles.icon} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.nameText}>Nome: Maria Aparecida</Text>
            <Text style={styles.roleText}>Cargo: Presidente</Text>
          </View>
        </View>         
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  button: {
    width: 200,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: '#D52527',
    borderWidth: 1,
    backgroundColor: 'white',
  },
  buttonText: {
    color: '#D52527',
  },
  scrollContainer: {
    alignItems: 'center', 
    paddingBottom: 20,  
  },
  memberContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  iconContainer: {
    width: 230,
    height: 150,
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'flex-start',
    marginTop: 5,
    marginLeft: 15,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  roleText: {
    fontSize: 14,
    color: '#555',
  },
});

export default Team;
