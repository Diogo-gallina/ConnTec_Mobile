import React, {useLayoutEffect, useEffect, useState} from 'react';
import { View, Image, StyleSheet, ScrollView, SafeAreaView, Text } from 'react-native';

import {db} from '../../firebase'
import CustomListItem from './CustomListItem';

import { IoIosCreate } from 'react-icons/io';

import {Container} from './MessageStyle';

export default function ChatList ({navigation}){
  const [chats, setChats] = useState([]);
  


  useLayoutEffect(() =>{
    navigation.setOptions({
        title: "Chat",
        headerBackTitle: "Chats",
    });
  }, [navigation]);

  useEffect(() => {
    const unsubscribe = db.collection('chats').onSnapshot(snapshot => (
      setChats(snapshot.docs.map(doc =>({
        id: doc.id,
        data: doc.data()
      })))
    ))
    return unsubscribe;
  }, [])


  const enterChat = (id, chatName) => {
    navigation.navigate("ChatScreen", {
      id,
      chatName,
    })
  }

  return (
    
      <Container>
      
        <View>
          <Image 
          style={{  
            marginTop:45,
            height:50,
            width:50,
            alignSelf:'center',
            justifyContent:'center'
            }} 
            source={require('../../assets/logoConn.png')}>
          </Image>
        </View>
        <SafeAreaView>
          <ScrollView style={styles.container}>
            {chats.map(({id, data: { chatName }}) => (
              <CustomListItem key={id} id={id} chatName={chatName} enterChat={enterChat}/>
            ))}
          </ScrollView>
          </SafeAreaView>
      </Container>
    
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%'
  }
})

