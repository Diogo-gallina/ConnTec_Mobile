import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function EditUser({ navigation }) {
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
      <View style={{ alignSelf: "center" }}>
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
          {nome}{" "}
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
        Edite a suas informações:
      </Text>

      <View
        style={{ marginTop: 10, flexDirection: "row", alignSelf: "center" }}
      >
        <TouchableOpacity
          style={styles.buttonEdit}
          onPress={() => navigation.navigate("NewPassword")}
        >
          <Text style={styles.txtButtonEdits}>Senha</Text>
        </TouchableOpacity>
      </View>
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
    //buttons editar - name/E-mail/password
    backgroundColor: "#b20000",
    width: 90,
    height: 90,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    bottom: 2,
    alignSelf: "center",
    marginEnd: 10,
    marginTop: 20,
  },
  txtButtonEdits: {
    //texto dos buttons editar - name/E-mail/password
    fontSize: 15,
    color: "#FFF",
  },
  image: {
    //flex image profile
    flex: 1,
    height: 132,
    width: 132,
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
