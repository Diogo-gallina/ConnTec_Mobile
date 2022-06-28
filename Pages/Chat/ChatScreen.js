import React, {
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Bubble, GiftedChat, Send } from "react-native-gifted-chat";
import { Avatar } from "react-native-elements";

import AsyncStorage from "@react-native-async-storage/async-storage";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { db } from "../../firebase";

export default function ChatScreen({ navigation, route }) {
  const [messages, setMessages] = useState([]);
  const [nome, setNome] = useState(null);
  const [id, setID] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    async function getNome() {
      let response = await AsyncStorage.getItem("userData");
      let json = JSON.parse(response);
      setEmail(json.email);
      setNome(json.nome);
      setID(json.idUsuario);
    }
    getNome();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Chat",
      headerBackTitleVisible: false,
      headerTitleAlign: "left",
      headerTitle: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Avatar
            rounded
            source={{
              uri: "https://media.istockphoto.com/vectors/default-avatar-profile-icon-grey-photo-placeholder-hand-drawn-modern-vector-id1273297997?k=20&m=1273297997&s=612x612&w=0&h=EkhPspb58IrPQnchFVjZFrz5R1hnCZJTTH_l34J2EtU=",
            }}
          />
          <Text style={{ color: "black", marginLeft: 10, fontWeight: "700" }}>
            {route.params.chatName}
          </Text>
        </View>
      ),
    });
  }, []);

  useEffect(() => {
    const unsubscribe = db
      .collection("chats")
      .doc(route.params.id)
      .collection("messages")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) =>
        setMessages(
          snapshot.docs.map((doc) => ({
            _id: doc.id,
            createdAt: doc.data().createdAt.toDate(),
            text: doc.data().text,
            user: doc.data().user,
          }))
        )
      );
    return unsubscribe;
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );

    const { _id, createdAt, text, user } = messages[0];
    db.collection("chats").doc(route.params.id).collection("messages").add({
      _id,
      createdAt,
      text,
      user,
    });
  }, []);

  const renderSend = (props) => {
    return (
      <TouchableOpacity>
        <Send {...props}>
          <View>
            <MaterialCommunityIcons
              name="send-circle"
              style={{ marginBottom: 5, marginRight: 5 }}
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
            backgroundColor: "#b20000",
          },
        }}
        textStyle={{
          right: {
            color: "#fff",
          },
        }}
      />
    );
  };

  const scrollToBottomComponent = () => {
    return <FontAwesome name="angle-double-down" size={22} color="#333" />;
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: id,
        name: nome,
      }}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
    />
  );
}
