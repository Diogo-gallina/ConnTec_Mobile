import React, {useEffect, useState} from 'react';
import { View, Text, Button, StyleSheet, FlatList, Image, ImageEditor } from 'react-native';
import {
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

import {ListItem} from 'react-native-elements'

import {db} from '../../firebase'



const CustomListItem = ({id, chatName, enterChat}) => {

    const Messages = [
        
        {
        id: id,
        userName: chatName,
        userImg: require('../../assets/imageDiogo.png'),
        messageTime: '4 minutos',
        messageText:
            'Hey there, this is my test for a post of my social app in React Native.',
        },
        
    ];

    return (
          <Card onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
            <UserInfo >
              <UserImgWrapper>
                <UserImg source={{uri: "https://media.istockphoto.com/vectors/default-avatar-profile-icon-grey-photo-placeholder-hand-drawn-modern-vector-id1273297997?k=20&m=1273297997&s=612x612&w=0&h=EkhPspb58IrPQnchFVjZFrz5R1hnCZJTTH_l34J2EtU="}} />
              </UserImgWrapper>
              <TextSection>
                <UserInfoText>
                    
                  <UserName>{chatName}</UserName>
                  <PostTime>14:33</PostTime>
                </UserInfoText>
                <MessageText>teste</MessageText>
              </TextSection>
            </UserInfo>
          </Card>
    )
}

export default CustomListItem;