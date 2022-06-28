import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons";
import { Input } from "react-native-elements";

export default function NewPassword({ navigation }) {
  const [nome, setNome] = useState(null);

  useEffect(() => {
    async function getNome() {
      let response = await AsyncStorage.getItem("userData");
      let json = JSON.parse(response);
      setNome(json.nome);
    }
    getNome();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignSelf: "center", }}>
        <View style={styles.profileImage}>
          <Image
            source={require("../../assets/logoConn.png")}
            style={styles.image}
            resizeMode="center"
          ></Image>
        </View>
      </View>

      <View style={styles.containerInfo}>
        <Text style={[styles.text, { fontWeight: "200", fontSize: 46 }]}>
          {" "}
          {nome}
        </Text>
        <Text style={[styles.text, { fontSize: 14, color: "#AEB5BC" }]}>
          {" "}
          Desenvolvimento de sistemas{" "}
        </Text>
      </View>

      <Text
        style={[
          styles.text,
          {
            fontSize: 20,
            color: "#b20000",
            marginStart: 20,
            marginTop: 30,
            fontWeight: "300",
          },
        ]}
      >
        Edite sua senha:
      </Text>

      <View style={styles.containerInput}>

        <Input
          style={styles.input}
          placeholder="Digite sua antiga senha"
          autocorrect={false}
          onChangeText={() => {}}
        />

        <Input
          style={styles.input}
          placeholder="Digite sua nova senha"
          autocorrect={false}
          onChangeText={() => {}}
        />

        <Input
          style={styles.input}
          placeholder="Confirme sua senha"
          autocorrect={false}
          onChangeText={() => {}}
        />
      </View>

      <TouchableOpacity style={styles.buttonEdit}>
        <AntDesign name="arrowright" size={32} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex principal perfil
    flex: 1,
  },
  text: {
    //predefinicao de texto pronta
    color: "#52575D",
  },
  containerInfo: {
    //container das informações - nome/curso
    alignItems: "center",
    alignSelf: "center",
    bottom: 20,
    marginTop: 50,
  },
  buttonEdit: {
    //button arrow editar
    backgroundColor: "#b20000",
    width: 90,
    height: 90,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    bottom: 2,
    alignSelf: "center",
    marginEnd: 10,
    marginTop: 1,
  },

  containerInput:{
    width:350,
    alignSelf:"center"
  },
  input: {
    width: 300,
    color: "#b20000",
    fontSize: 20,
    borderBottomColor: "#D8D8D8",
    borderBottomWidth: 1,
    marginTop: 15,
    alignSelf: "center",
    marginLeft:20
  },
  image: {
    //flex image profile
    flex: 1,
    height: 122,
    width: 122,
    marginBottom: -60,
    display: "flex",
    alignSelf: "center",
  },
  profileImage: {
    //imagem de perfil
    width: 200,
    height: 200,
    overflow: "hidden",
  },
});
