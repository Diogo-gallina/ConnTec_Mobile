import React, { useEffect, useState } from "react";
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
} from "./MessageStyle";

import { db } from "../../firebase";

const CustomListItem = ({ id, chatName, enterChat }) => {
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("chats")
      .doc(id)
      .collection("messages")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) =>
        setChatMessages(snapshot.docs.map((doc) => doc.data()))
      );

    return unsubscribe;
  }, []);

  return (
    <Card onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
      <UserInfo>
        <UserImgWrapper>
          <UserImg
            source={{
              uri: "https://media.istockphoto.com/vectors/default-avatar-profile-icon-grey-photo-placeholder-hand-drawn-modern-vector-id1273297997?k=20&m=1273297997&s=612x612&w=0&h=EkhPspb58IrPQnchFVjZFrz5R1hnCZJTTH_l34J2EtU=",
            }}
          />
        </UserImgWrapper>
        <TextSection>
          <UserInfoText>
            <UserName>{chatName}</UserName>
            <PostTime>14:33</PostTime>
          </UserInfoText>
          <MessageText>
            {chatMessages?.[0]?.user?.name}: {chatMessages?.[0]?.text}
          </MessageText>
        </TextSection>
      </UserInfo>
    </Card>
  );
};

export default CustomListItem;
