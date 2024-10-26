import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../views/Home';
import Calendar from '../views/Calendar';
import Profile from '../views/Profile';
import Publish from '../views/Publish';

//ícones personalizados
import HomeIcon from '../images/icons/casa.png';
import CalendarIcon from '../images/icons/calendario.png';
import ProfileIcon from '../images/icons/perfil.png';
import MegaphoneIcon from '../images/icons/megafone.png';

const Tab = createBottomTabNavigator();

const CustomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconSource;
          if (route.name === 'Início') {
            iconSource = HomeIcon;
          } else if (route.name === 'Calendário') {
            iconSource = CalendarIcon;
          } else if (route.name === 'Publicar') {
            iconSource = MegaphoneIcon;
          }
          else if (route.name === 'Perfil') {
            iconSource = ProfileIcon;
          }

          return (
            <Image
              source={iconSource}
              style={{
                width: size,
                height: size,
              }}
              resizeMode="contain"
            />
          );
        },
        tabBarActiveTintColor: '#5D17EB',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarStyle: { backgroundColor: '#F0F0F0' },
      })}
    >
      <Tab.Screen name="Início" component={Home} />
      <Tab.Screen name="Calendário" component={Calendar} />
      <Tab.Screen name="Publicar" component={Publish} />
      <Tab.Screen name="Perfil" component={Profile} />
    </Tab.Navigator>
  );
};

export default CustomTabNavigator;
