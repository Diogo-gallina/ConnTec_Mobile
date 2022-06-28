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
            marginTop: "13%",
            bottom:10,
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
            style={{ marginTop: "5%", marginLeft: "7%", marginRight: "5%" }}
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

          

            
          <View style={styles.feedContainer}>

            <TouchableOpacity onPress={() => navigation.navigate("News")}>

              <View style={styles.imgContainer}>
                <Image
                  style={styles.post}
                  source={require("../../assets/post1.jpg")}
                />
              </View>

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

            </TouchableOpacity>  

            <TouchableOpacity>

              <View style={styles.imgContainer}>
                <Image
                  style={styles.post}
                  source={require("../../assets/post2.jpg")}
                />
              </View>

              <View style={styles.containerTitlePost}>  
                  <Text style={styles.txtTitle}>
                    Sábado letivo: Projeto Gamer
                  </Text>
              </View>

              <View style={styles.description}>
                  <Text style={styles.txtDescription}>
                  Sábado letivo do dia 25/06 reúniremos os alunos para um evento gamer, integrando os alunos do etim e modular com diversos jogos!
                  </Text>
              </View>

            </TouchableOpacity>

            <TouchableOpacity>

              <View style={styles.imgContainer}>
                <Image
                  style={styles.post}
                  source={require("../../assets/post3.jpg")}
                />
              </View>

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
    alignItems:'center'
  },

  imgContainer:{
    alignItems:'center'
  },

  containerTitlePost: {
    width: 300,
    height: 60,
    borderRadius: 100,
    marginTop: 10,
    marginLeft: 45,
    
  },

  txtTitle: {
    
    fontFamily: "HelveticaNeue",
    color: "#b20000",
    fontSize:21, 
    fontWeight:"bold"
  },

  post: {
    //container do post
    backgroundColor: "black",
    height: 400,
    width: 290,
    height: 335,
    width: 340,
    marginTop: 40,
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

  description: {
    // container descrição do post
    marginLeft: 100,
    marginRight: 40,
    marginLeft: 65,
    marginRight: 55,
    bottom: 3
  },

  txtDescription:{
    fontFamily: "HelveticaNeue",
    color: "gray",
  },
});
