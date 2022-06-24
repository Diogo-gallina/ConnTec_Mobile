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

export default function News({ navigation }) {

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

          <View style={styles.newsContainer}>
            <TouchableOpacity style={{ alignItems:'center'}}>
              <View>
                <Image
                  style={styles.imgNews}
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

                <View style={styles.contaiterTxtNews}>
                  <Text style={styles.txtNews}>
                  O juiz federal Renato Coelho Borelli, responsável por supervisionar o inquérito sobre o chamado gabinete paralelo do MEC (Ministério da Educação), alertou sobre o sigilo da decisão que determinou medidas cautelares contra o ex-ministro Milton Ribeiro, entre elas, a busca e apreensão em seus endereços e a quebra de seu sigilo telefônico. Ao autorizar que a Polícia Federal procedesse com as novas medidas de investigação, Borelli destacou que pessoas "estranhas ao processo" não poderiam ficar sabendo dessas informações. A determinação consta em decisão judicial obtida pelo UOL. "As informações prestadas são acobertadas pelo segredo de justiça, delas não se podendo dar ciência a pesso... - Veja mais em https://noticias.uol.com.br/politica/ultimas-noticias/2022/06/24/juiz-alertou-para-sigilo-de-decisao-sobre-busca-e-grampo-contra-ribeiro.htm?cmpid=copiaecola
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

  newsContainer:{
    alignSelf:'center',
    alignItems:'center'
  },

  containerTitlePost: {
    marginTop: 20,
    marginLeft: 25,
    marginRight: 10,
  },

  imgNews: {
    //container do post
    display: "flex",
    backgroundColor: "black",
    height: 300,
    width: 390,
    marginTop: 15,
    borderRadius: 8
  },

  txtTitle: {
    
    fontFamily: "HelveticaNeue",
    color: "#b20000",
    fontSize:30, 
    fontWeight:"bold"
  },

  description: {
    // container descrição do post
    marginTop: 20,
    marginLeft: 25,
    marginRight: 55,
  },

  txtDescription:{
    fontFamily: "HelveticaNeue",
    color: "gray",
  },

  contaiterTxtNews:{
    alignItems:"center",
    marginTop: 50,
    marginLeft: 25,
    marginRight: 15,
    bottom: 20,
  },

  txtNews:{
    fontFamily: "HelveticaNeue",
    color: "gray",
    fontSize:19
  }


});
