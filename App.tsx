import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/views/Login';
import SignUp from './src/views/SignUp';
import RedefinePassword from './src/views/RedefinePassword';
import Home from './src/views/Home';
import TabBar from './src/views/TabBar';
import Athletic from './src/views/Athletic';
import DA from './src/views/DA';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabBar">
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUp} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="RedefinePassword" 
          component={RedefinePassword} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="TabBar" 
          component={TabBar} 
          options={{ headerShown: false }} 
        />
         <Stack.Screen 
          name="Athletic" 
          component={Athletic} 
          options={{ headerShown: false }} 
        />
         <Stack.Screen 
          name="DA" 
          component={DA} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;