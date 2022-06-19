import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Pages/Home/index';
import Login from '../Pages/Login/index';
import Cadastro from '../Pages/Cadastro/index';
import Onbording from '../Pages/OnbordingC/Onbording';
import Profile from '../Pages/Profile/index';
import Post from '../Pages/Post/index';


import Settings from '../Pages/Settings/index';
import Crud from '../Pages/CRUD/CRUD';
import EditUser from '../Pages/CRUD/edituser';
import EditName from '../Pages/CRUD/editName';
import EditEmail from '../Pages/CRUD/editEmail';
import NewPassword from '../Pages/CRUD/editPassword';
import Chat from '../Pages/Chat/ChatList';
import ChatScreen from '../Pages/Chat/ChatScreen';





const Stack = createStackNavigator();


export default function MyStack() {

  return (

    <Stack.Navigator>
      <Stack.Screen 
        name="Login" 
        component={Login}
        options={{headerShown: false}}
        />

      <Stack.Screen 
        name="Home" 
        component={Home}
        options={{headerShown: false}}
        />

      <Stack.Screen 
        name="Cadastro" 
        component={Cadastro} 
        options={{headerShown: false}}
        />
      
      <Stack.Screen 
        name="Onbording" 
        component={Onbording}
        options={{headerShown: false}}
        />
      
      <Stack.Screen 
        name="Profile" 
        component={Profile}
        options={{headerShown: false}}
        />

      <Stack.Screen 
        name="Post" 
        component={Post} 
        options={{headerShown: false}}
        />
        
      <Stack.Screen 
        name="Chat" 
        component={Chat} 
        options={{headerShown: false}}
        />

      <Stack.Screen 
          name="ChatScreen" 
          component={ChatScreen} 
          options={({route}) => ({
            title: route.params.userName,
            headerBackTitleVisible: true
          })}
        />  

         

      <Stack.Screen 
        name="Settings" 
        component={Settings} 
        options={{headerShown: false}}
        />

      <Stack.Screen 
        name="Crud" 
        component={Crud} 
        options={{headerShown: false}}
        />

       

      <Stack.Screen 
        name="EditUser" 
        component={EditUser} 
        options={{headerShown: false}}
        />

      <Stack.Screen 
        name="EditName" 
        component={EditName} 
        options={{headerShown: false}}
        />

      <Stack.Screen 
        name="EditEmail" 
        component={EditEmail} 
        options={{headerShown: false}}
        />

      <Stack.Screen 
        name="NewPassword" 
        component={NewPassword} 
        options={{headerShown: false}}
        />
     </Stack.Navigator>

  );

}