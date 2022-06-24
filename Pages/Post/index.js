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
      <View style={{alingItems:"center", justifyContent:"center"}}>
        <Image
          style={{
            marginTop: "11%",
            height: 60,
            width: 60,
            alignSelf: "center",
            justifyContent:"center"
          }}
          source={require("../../assets/logoConn.png")}
        />
      </View>

      <View>
        <ScrollView>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: "7%", alignSelf:"center" }}
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
              onPress={() => navigation.navigate("Crud")}
            >
              <Icon name="dots-horizontal" color="white" size={32} />
            </TouchableOpacity>
          </ScrollView>

          <View style={styles.feedContainer}>
            <TouchableOpacity style={{ alignItems:'center'}} onPress={() => navigation.navigate("News")}>
              <View>
                <Image
                  style={styles.post}
                  source={require("../../assets/post1.jpg")}
                />
              </View>

              <View>
                <View style={styles.containerTitlePost}>
                
                  <Text style={styles.txtTitle}>
                    Monitoria: Criando formulário com Mysql e php  
                  </Text>
                </View>

                <View style={styles.description}>
                  <Text style={styles.txtDescription}>
                    Aprenda a fazer um formulário em html e php com os integrantes da monitoria, dia 28/ as 18:00 horas.
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ bottom: 100 }}>
              <View style={{alignItems:'center'}}>
                  <Image
                    style={styles.post}
                    source={require("../../assets/post2.jpg")}
                  />
              </View>

                <View>
                  <View style={styles.containerTitlePost}>
                  
                    <Text style={styles.txtTitle}>
                      Sábado Gamer  
                    </Text>
                  </View>

                  <View style={styles.description}>
                    <Text style={styles.txtDescription}>
                      Sábado letivo do dia 25/06 reúniremos os alunos para um evento gamer, integrando os alunos do etim e modular com diversos jogos!
                    </Text>
                  </View>
                </View>                                    
            </TouchableOpacity>

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

  feedContainer:{
    alignSelf:'center',
    alignItems:'center'
  },

  containerTitlePost: {
    marginTop: 65,
    marginLeft: 45,
    marginRight: 30,
    bottom: 55,

  },

  post: {
    //container do post
    backgroundColor: "black",
    height: 335,
    width: 340,
    marginTop: 70,
    borderRadius: 20,
  },

  txtTitle: {
    
    fontFamily: "HelveticaNeue",
    color: "#b20000",
    fontSize:20, 
    fontWeight:"bold"
  },

  description: {
    // container descrição do post
    marginTop: 10,
    marginLeft: 65,
    marginRight: 55,
    bottom: 55,
  },

  txtDescription:{
    fontFamily: "HelveticaNeue",
    color: "gray",
  },
});
