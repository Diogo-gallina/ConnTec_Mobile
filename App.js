import React, {useState,useEffect} from 'react';
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

//   const [expoPushToken, setExpoPushToken] = useState(null);

//   //Registra o token do usuário
// async function registerForPushNotificationsAsync(){
//   if (Constants.isAparelho) {
//       const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
//       let finalStatus = existingStatus;
//       if (existingStatus !== 'granted') {
//           const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
//           finalStatus = status;
//       }
//       if (finalStatus !== 'granted') {
//           alert('Falha ao obter a permissão');
//           return;
//       }
//       const token = await Notifications.getExpoPushTokenAsync();
//       setExpoPushToken(token);
//   } else {
//       alert('Celular não compativel com notificações');
//   }

//   if (Platform.OS === 'android') {
//       Notifications.createChannelAndroidAsync('default', {
//           name: 'default',
//           sound: true,
//           priority: 'max',
//           vibrate: [0, 250, 250, 250],
//       });
//   }
// }

// //Envio do token
// async function sendToken()
// {
//     let response=await fetch(config.urlRoot+'token',{
//         method:'POST',
//         headers:{
//             Accept:'application/json',
//             'Content-Type':'application/json'
//         },
//         body: JSON.stringify({
//             token: expoPushToken
//         })
//     });
// }

//   useEffect(()=>{
//     registerForPushNotificationsAsync();
//   },[]);

//   useEffect(()=>{
//     if(expoPushToken != null){
//        sendToken();
//   }
// },  [expoPushToken]);

  return (
    <>
      <NavigationContainer>
        <MyStack  />
      </NavigationContainer>
    </>
  );
}

