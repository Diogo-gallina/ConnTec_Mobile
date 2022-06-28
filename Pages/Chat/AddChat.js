import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Input } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

import { db } from "../../firebase";

const AddChat = ({ navigation }) => {
  const [input, setInput] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Crie um grupo",
      headerBackTitle: false,
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

      <TouchableOpacity disabled={!input} onPress={createChat} style={styles.btnCreate}>

        <Text style={{color:"#fff"}}>Criar</Text>

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
    width:50,
    alignSelf:"center",
    display:'flex',
    left:20,
    marginTop:"25%",
    marginLeft:"3%"
  },
  btnCreate:{
    backgroundColor: "#b20000",
    fontSize: 10,
    borderRadius: 40,
    height: "25%",
    width:"90%",
    marginTop: "5%",
    alignSelf: "center",
    alignItems:"center",
    justifyContent: "center",

  }
});
