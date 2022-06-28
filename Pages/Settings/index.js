import React, { useState, useEffect } from "react";
import {
  View,
  Switch,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Settings({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);
  const [nome, setNome] = useState(null);

  useEffect(() => {
    async function getNome() {
      let response = await AsyncStorage.getItem("userData");
      let json = JSON.parse(response);
      setNome(json.nome);
    }
    getNome();
  }, []);

  const sair = () => {
    AsyncStorage.clear();
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{
            marginTop: "20%",
            height: 60,
            width: 60,
            alignSelf: "center",
          }}
          source={require("../../assets/logoConn.png")}
        ></Image>

        <Text style={styles.titleConfig}>Configurações</Text>
      </View>

      <View style={[styles.containerMain, { marginTop: "7%" }]}>
        <View style={[styles.containerFunc, { marginTop: "5%" }]}>
          <Text style={styles.txtFunc}>Dark Mode</Text>

          <View style={[styles.icons, { backgroundColor: "#b20000" }]}>
            <MaterialCommunityIcons
              style={{ alignSelf: "center", marginTop: "10%" }}
              name="theme-light-dark"
              size={20}
              color="white"
            />
          </View>

          <View>
            <Switch
              trackColor={{ false: "white", true: "#b20000" }}
              thumbColor={isEnabled ? "white" : "black"}
              ios_backgroundColor="gray"
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={styles.interruptor}
            />
          </View>
        </View>

        <View style={[styles.containerFunc, { marginTop: "5%" }]}>
          <Text style={styles.txtFunc}>Notifications</Text>

          <View style={[styles.icons, { backgroundColor: "#b20000" }]}>
            <MaterialCommunityIcons
              style={{ alignSelf: "center", marginTop: "10%" }}
              name="bell"
              size={20}
              color="white"
            />
          </View>

          <View>
            <Switch
              trackColor={{ false: "white", true: "#b20000" }}
              thumbColor={isEnabled ? "white" : "white"}
              ios_backgroundColor="gray"
              onValueChange={toggleSwitch2}
              value={isEnabled2}
              style={styles.interruptor}
            />
          </View>
        </View>
      </View>

      <View style={[styles.containerMain, { marginTop: "15%" }]}>
        <TouchableOpacity style={[styles.containerFunc, { marginTop: "5%" }]} onPress={() => navigation.navigate("PoliticaDeSeguranca")}>
          <Text style={styles.txtFunc}>Politicas e serviços</Text>

          <View style={[styles.icons, { backgroundColor: "#b20000" }]}>
            <Ionicons
              style={{ alignSelf: "center", marginTop: "10%" }}
              name="document"
              size={20}
              color="white"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => sair()}
          style={[styles.containerFunc, { marginTop: "5%" }]}
        >
          <Text style={styles.txtFunc}>Sair</Text>

          <View style={[styles.icons, { backgroundColor: "#b20000" }]}>
            <Ionicons
              style={{ alignSelf: "center", marginTop: "10%" }}
              name="exit"
              size={20}
              color="white"
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleConfig: {
    fontSize: 30,
    color: "#B20000",
    marginLeft: "5%",
    marginTop: "10%",
    fontWeight: "100",
    alignSelf: "center",
  },
  txtFunc: {
    fontSize: 17,
    color: "black",
    marginLeft: "17%",
    marginTop: "5%",
    fontWeight: "400",
  },
  interruptor: {
    marginLeft: "80%",
    bottom: "190%",
  },
  containerMain: {
    backgroundColor: "#f5f5f5",
    height: "15%",
    borderRadius: 30,
    marginLeft: "10%",
    marginRight: "10%",
  },
  containerFunc: {
    backgroundColor: "#e5e5e5",
    width: "90%",
    height: "40%",
    marginLeft: "5%",
    marginRight: "5%",
    borderRadius: 20,
  },
  icons: {
    height: 30,
    width: 30,
    borderRadius: 15,
    bottom: "65%",
    marginLeft: "3%",
  },
});
