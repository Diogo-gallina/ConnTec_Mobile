import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
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
      <Button disabled={!input} onPress={createChat} title="Criar" />
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
  },
});
