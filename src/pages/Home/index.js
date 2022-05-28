import * as React from "react";
import { Text, View, StyleSheet, Image, TextInput } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Ionicons } from "@expo/vector-icons"; //importando biblioteca de icons

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ position: "relative" }}>
        <Image
          style={{ marginTop: 75, height: 50, width: 50, alignSelf: "center" }}
          source={require("../../../assets/logoConn.png")}
        ></Image>
      </View>
      <View
        style={{ display: "flex", position: "absolute", right: 23, top: 25 }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Icon
            name="account-circle"
            size={43}
            color="#e5e5e5"
            style={{
              width: 200,
              display: "flex",
              justifyContent: "center",
              marginTop: 50,
            }}
          />
        </TouchableOpacity>
      </View>

      <View style={{ paddingHorizontal: 40, marginTop: 25 }}>
        <Text
          style={{
            fontSize: 50,
            color: "#B20000",
            fontFamily: "RobotoBold",
          }}
        >
          Seja Bem vindo,
        </Text>

        <Text
          style={{
            fontSize: 15,
            paddingVertical: 10,
            paddingRight: 80,
            lineHeight: 22,
            fontFamily: "RobotoRegular",
            color: "#B20000",
          }}
        >
          Nosso app esta em desenvolvimento
        </Text>

        <View>
          <TextInput
            placeholder="Search..."
            style={{
              backgroundColor: "#e5e5e5",
              borderRadius: 40,
              alignItems: "center",
              paddingVertical: 10,
              paddingHorizontal: 20,
              marginTop: 30,
              fontSize: 24,
              color: "#b20000",
            }}
          />

          <TouchableOpacity
            style={{
              backgroundColor: "#b20000",
              height: 52,
              width: 50,
              borderBottomRightRadius: 20,
              borderTopRightRadius: 20,
              position: "absolute",
              bottom: 0,
              right: 0,
              justifyContent: "center",
            }}
          >
            <Ionicons
              style={{ alignSelf: "center" }}
              name="search"
              color="white"
              size={30}
            />
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            alignSelf: "center",
            marginTop: 25,
            marginLeft: -15,
            height: 85,
          }}
        >
          <TouchableOpacity
            style={[styles.buttonsTab, { backgroundColor: "#ffac06" }]}
            onPress={() => navigation.navigate("Search")}
          >
            <Icon name="post" color="white" size={32} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.buttonsTab, { backgroundColor: "#ffa06c" }]}
            onPress={() => navigation.navigate("Profile")}
          >
            <Icon name="bell" color="white" size={32} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.buttonsTab, { backgroundColor: "#5facdb" }]}
            onPress={() => navigation.navigate("Chat")}
          >
            <Icon name="chat" color="white" size={32} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.buttonsTab, { backgroundColor: "#bb3" }]}
            onPress={() => navigation.navigate("Settings")}
          >
            <Ionicons name="settings" color="white" size={32} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.buttonsTab, { backgroundColor: "#bb32fe" }]}
            onPress={() => navigation.navigate("Crud")}
          >
            <Icon name="dots-horizontal" color="white" size={32} />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //container principal
    flex: 1,
  },
  buttonsTab: {
    //buttons da tab-bar
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    width: 60,
    borderRadius: 50,
    marginLeft: 10,
    display: "relative",
  },
});
