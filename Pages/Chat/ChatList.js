import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, Image } from 'react-native';
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from './MessageStyle';


export default function ChatList ({navigation}){

  const Messages = [
    {
      id: '1',
      userName: 'Diogo Gallina',
      userImg: require('../../assets/imageDiogo.png'),
      messageTime: '4 minutos',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '2',
      userName: 'Cesar Adriano',
      userImg: require('../../assets/images.png'),
      messageTime: '2 horas atrás',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    
    {
      id: '3',
      userName: 'Paulo Cezar',
      userImg: require('../../assets/pauloCesar.png'),
      messageTime: '1 dia atrás',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '4',
      userName: 'Ana Paula',
      userImg: require('../../assets/images.png'),
      messageTime: '1 horas atrás',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '5',
      userName: 'Erik Alves',
      userImg: require('../../assets/imageErik.png'),
      messageTime: '4 horas atrás',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },

    {
      id: '6',
      userName: 'Diogo Correia',
      userImg: require('../../assets/imageDiogoCorreia.png'),
      messageTime: '2 dias atrás',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },

    {
      id: '7', 
      userName: 'Gisele Cristina',
      userImg: require('../../assets/imageGisele.png'),
      messageTime: '1 dia atrás',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },

    {
      id: '8',
      userName: 'William Vinicius',
      userImg: require('../../assets/imageWilliam.png'),
      messageTime: '6 horas atrás',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },

    {
      id: '9',
      userName: 'Cauã Silva',
      userImg: require('../../assets/imageCaua.png'),
      messageTime: '2 dias atrás',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },

  ];

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

      <FlatList 
        data={Messages}
        keyExtractor={item=>item.id}
        renderItem={({item}) => (
          <Card onPress={() => navigation.navigate("ChatScreen")}>
            <UserInfo>
              <UserImgWrapper>
                <UserImg source={item.userImg} />
              </UserImgWrapper>
              <TextSection>
                <UserInfoText>
                  <UserName>{item.userName}</UserName>
                  <PostTime>{item.messageTime}</PostTime>
                </UserInfoText>
                <MessageText>{item.messageText}</MessageText>
              </TextSection>
            </UserInfo>
          </Card>
        )}
      />
    </Container>
  );
}

