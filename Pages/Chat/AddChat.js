import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Button, Input } from "react-native-elements";

import { db } from "../../firebase";

const AddChat = ({ navigation }) => {
  const [input, setInput] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Adicione um novo chat",
      headerBackTitle: "Chats",
    });
  }, [navigation]);

  const createChat = async () => {
    await db
      .collection("chats")
      .add({
        chatName: input,
      })
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => alert(error));
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Coloque o nome do chat"
        value={input}
        onChangeText={(text) => setInput(text)}
        onSubmitEditing={createChat}
        style={styles.input}
      />

      <TouchableOpacity 
        style={styles.createBtn} 
        disabled={!input}
        onPress={createChat}
      >
        <Text style={styles.createTxt}>Criar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddChat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    marginTop: 120,
    marginLeft:20,
    marginRight:50
  },

  createBtn:{
    backgroundColor: "#b20000",
    width: 300,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    bottom: 2,
    alignSelf: "center",
    marginEnd: 10,
    marginTop: 30,
  },

  createTxt:{
    fontSize: 17,
    color: "#FFF",
  }
});
