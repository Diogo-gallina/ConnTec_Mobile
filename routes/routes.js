import * as React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Home from "../Pages/Home/index";
import Login from "../Pages/Login/index";
import Cadastro from "../Pages/Cadastro/index";
import Onbording from "../Pages/OnbordingC/Onbording";
import Profile from "../Pages/Profile/index";
import Post from "../Pages/Post/index";
import Settings from "../Pages/Settings/index";
import EditUser from "../Pages/CRUD/edituser";
import NewPassword from "../Pages/CRUD/editPassword";
import Chat from "../Pages/Chat/ChatList";
import ChatScreen from "../Pages/Chat/ChatScreen";
import AddChat from "../Pages/Chat/AddChat";
import News1 from "../Pages/News/news1";
import News2 from "../Pages/News/news2";
import RecoverPassword from "../Pages/RecoverPassword";
import PoliticaDeSeguranca from "../Pages/PoliticaDeSeguranca";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Onbording"
        component={Onbording}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Post"
        component={Post}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{ headerShown: true }}
      />

      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{ headerShown: true, headerBackTitleVisible: false }}
      />

      <Stack.Screen
        name="AddChat"
        component={AddChat}
        options={{ headerShown: true, headerBackTitleVisible: false }}
      />

      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="EditUser"
        component={EditUser}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="NewPassword"
        component={NewPassword}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="News1"
        component={News1}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="News2"
        component={News2}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="RecoverPassword"
        component={RecoverPassword}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="PoliticaDeSeguranca"
        component={PoliticaDeSeguranca}
        options={{ headerShown: false }}
      />      
    </Stack.Navigator>
  );
}
