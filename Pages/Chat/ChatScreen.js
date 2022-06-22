import React, {useState, useEffect, useCallback, useLayoutEffect} from 'react';
import {View, ScrollView, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat'
import {Avatar} from 'react-native-elements'

import AsyncStorage from "@react-native-async-storage/async-storage";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



import firebase from 'firebase';
import {db} from '../../firebase'



export default function ChatScreen ({navigation, route}){

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [nome, setNome] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    async function getNome() {
      let response = await AsyncStorage.getItem("userData");
      let json = JSON.parse(response);
      setEmail(json.email);
      setNome(json.nome);
    }
    getNome();
  }, []);


  useLayoutEffect(() =>{
    navigation.setOptions({
        title: "Chat" ,
        headerBackTitleVisible: false,
        headerTitleAlign: 'left',
        headerTitle: () => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
              <Avatar
                rounded
                source={{
                  uri:
                    "https://media.istockphoto.com/vectors/default-avatar-profile-icon-grey-photo-placeholder-hand-drawn-modern-vector-id1273297997?k=20&m=1273297997&s=612x612&w=0&h=EkhPspb58IrPQnchFVjZFrz5R1hnCZJTTH_l34J2EtU="
                }}
              />
              <Text style={{ color: "black", marginLeft: 10, fontWeight: "700"}}
              >{route.params.chatName}</Text>
              
          </View>
        )
    });
  }, [navigation]);

  const sendMessage = () => {
    Keyboard.dismiss();

    db.collection('chats').doc(route.params.id).collection('messages').add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      displayName: nome,
      email: email,
      photoURL: '',
    })

    setInput('')
  };

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Olá Estudante',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'Olá.',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
          
        },
      },
    ]);
  }, []);


  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );

  }, []);

  const renderSend = (props) => {
    return (
      <TouchableOpacity
        onPress={sendMessage}
      >
        <Send {...props} >
            <View>
              <MaterialCommunityIcons
                name="send-circle"
                style={{marginBottom: 5, marginRight: 5}}
                size={41}
                color="#b20000"
              />
            </View>
        </Send>
      </TouchableOpacity>
    );
  };

  const renderBubble = (props) => {
    return (
  
        <Bubble
          {...props}
          wrapperStyle={{
            right: {
              backgroundColor: '#b20000',
            },
          }}
          textStyle={{
            right: {
              color: '#fff',
            },
          }}
         
        />
      
    );
  };

  const scrollToBottomComponent = () => {
    return(
      <FontAwesome name='angle-double-down' size={22} color='#333' />
    );
  }

  return (
    
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        onChangeText={(messages) => setInput(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={renderBubble}
        alwaysShowSend
        renderSend={renderSend}
        scrollToBottom
        scrollToBottomComponent={scrollToBottomComponent}
        />
    
    
  );
}
