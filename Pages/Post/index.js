import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Text,
} from "react-native"; //importando componentes

import { Ionicons } from "@expo/vector-icons"; //importando icons
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function Post({ navigation }) {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
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
      </View>

      <View>
        <ScrollView>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: "5%", marginLeft: "1%", marginRight: "5%" }}
          >
            <TouchableOpacity
              style={[styles.buttonsTab, { backgroundColor: "#ffac06" }]}
              onPress={() => navigation.navigate("Home")}
            >
              <Icon name="home" color="white" size={32} />
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
              onPress={() => navigation.navigate("EditUser")}
            >
              <Icon name="dots-horizontal" color="white" size={32} />
            </TouchableOpacity>
          </ScrollView>

          <View>
            <View>
              <Image
                style={styles.post}
                source={require("../../assets/post1.jpg")}
              />
            </View>

            <View style={styles.containerTitlePost}>
              <Image
                source={require("../../assets/icon.jpg")}
                style={styles.imageUser}
                resizeMode="center"
              ></Image>
              <Text style={[styles.txt, { marginLeft: 60, bottom: 30 }]}>
                Gisele@
              </Text>
              <Text
                style={[
                  styles.txt,
                  {
                    marginLeft: 70,
                    fontWeight: "600",
                    color: "green",
                    bottom: 30,
                  },
                ]}
              >
                {" "}
                Xbox Favorite!!{" "}
              </Text>
            </View>

            <View>
              <Text style={styles.user}>Gisele@:</Text>

              <View style={styles.description}>
                <Text style={styles.txt}>
                  Bottom line: Xbox Series X is Microsoft's best Xbox console
                  yet, sporting powerful and bold hardware that won't
                  disappoint.
                </Text>
              </View>
            </View>
          </View>

          <View style={{ bottom: 100 }}>
            <View>
              <Image
                style={styles.post}
                source={require("../../assets/post2.jpg")}
              />
            </View>

            <View style={styles.containerTitlePost}>
              <Image
                source={require("../../assets/icon2.jpg")}
                style={styles.imageUser}
                resizeMode="center"
              ></Image>
              <Text style={[styles.txt, { marginLeft: 60, bottom: 30 }]}>
                CesarAa
              </Text>
              <Text
                style={[
                  styles.txt,
                  {
                    marginLeft: 70,
                    fontWeight: "600",
                    color: "green",
                    bottom: 30,
                  },
                ]}
              >
                {" "}
                Xbox Favorite!!{" "}
              </Text>
            </View>

            <View>
              <Text style={styles.user}>Gisele@:</Text>

              <View style={styles.description}>
                <Text style={styles.txt}>
                  Bottom line: Xbox Series X is Microsoft's best Xbox console
                  yet, sporting powerful and bold hardware that won't
                  disappoint.
                </Text>
              </View>
            </View>
          </View>
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
    //buttons da tab-bar do header
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    width: 60,
    borderRadius: 50,
    marginLeft: 10,
  },

  containerTitlePost: {
    backgroundColor: "white",
    width: 260,
    height: 60,
    marginLeft: 85,
    bottom: 70,
    borderRadius: 100,
  },

  post: {
    //container do post
    backgroundColor: "black",
    height: 400,
    width: 290,
    marginLeft: 70,
    marginTop: 70,
    borderRadius: 20,
  },

  imageUser: {
    //icone do postador
    width: 30,
    height: 30,
    borderRadius: 100,
    overflow: "hidden",
    marginTop: 13,
    marginLeft: 20,
  },
  txt: {
    //predefinição de text
    fontFamily: "HelveticaNeue",
    color: "gray",
  },
  user: {
    //nome do postador
    bottom: 57,
    marginLeft: 100,
    fontWeight: "500",
  },
  description: {
    // container descrição do post
    marginLeft: 100,
    marginRight: 40,
    bottom: 55,
  },
});
