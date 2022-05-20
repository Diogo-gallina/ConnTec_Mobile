import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
} from 'react-native';

import SingIn from './src/pages/SingIn';
import SingUp from './src/pages/SingUp';
import AppRoutes from './src/routes/appRoutes';
import Profile from './src/pages/Profile';
import { Home } from './src/pages/Home';


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="SingIn" component={SingIn} />
      <Stack.Screen name="SingUp" component={SingUp} />
      <Stack.Screen name="AppRoutes" component={AppRoutes} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default function App(){
  return (
    <>
      <NavigationContainer>
        <MyStack  />
      </NavigationContainer>
    </>
  );
}

