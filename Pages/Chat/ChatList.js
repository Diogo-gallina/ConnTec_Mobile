import React, { useLayoutEffect, useEffect, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; //importando icons

import { db } from "../../firebase";
import CustomListItem from "./CustomListItem";

import { Container } from "./MessageStyle";

export default function ChatList({ navigation }) {
  const [chats, setChats] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Chat",
      headerBackTitle: false,
      headerTitle: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={styles.containerBtn}>
            <TouchableOpacity
              style={styles.add}
              onPress={() => navigation.navigate("AddChat")}
            >
              <Ionicons
                name="ios-add"
                size={20}
                color="white"
                style={{ marginLeft:2  }}
              ></Ionicons>
            </TouchableOpacity>
          </View>
        </View>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    const unsubscribe = db.collection("chats").onSnapshot((snapshot) =>
      setChats(() =>
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    return unsubscribe;
  }, []);

  const enterChat = (id, chatName) => {
    navigation.navigate("ChatScreen", {
      id,
      chatName,
    });
  };

  return (
    <Container>
      <View>
        <Image
          style={{
            marginTop: 45,
            height: 50,
            width: 50,
            alignSelf: "center",
            justifyContent: "center",
          }}
          source={require("../../assets/logoConn.png")}
        ></Image>
      </View>
      <SafeAreaView>
        <ScrollView style={styles.container}>
          {chats.map(({ id, data: { chatName } }) => (
            <CustomListItem
              key={id}
              id={id}
              chatName={chatName}
              enterChat={enterChat}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },

  add: {
    backgroundColor: "#b20000",
    position: "absolute",
    bottom: "10%",
    right: "1%",
    width: 32,
    height: 32,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    display:"flex",
    right:-50
  },

  containerBtn: {
    display: "flex",
    alignItems: "center",
    top: 16,
  },
});
