import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Feather } from '@expo/vector-icons';


import { Home } from '../pages/Home';
import { Search } from '../pages/Search/index';
import { Add } from '../pages/Add';
import Settings from '../pages/Settings';
import { Notification } from '../pages/Notification';

import { ButtonAdd } from '../components/ButtonAdd';


const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{

        tabBarStyle:{
          borderTopColor: 'transparent',
          display: "flex"
        },
        
        tabBarItemStyle:{
          paddingBottom: 5,
          paddingTop: 5
        },

        tabBarActiveTintColor: '#B20000',
        tabBarInactiveTintColor: '#706f6f',
        headerShown: false,
        
      }
    }
      
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" color={color} size={30} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color}) => (
            <Feather name="search" color={color} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <ButtonAdd />
          ),
        }}
      />

      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Feather name="bell" color={color} size={30} />
          ),
        }}
      />

    <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" color={color} size={30} />
          ),
        }}
      />


    </Tab.Navigator>
  );
}


