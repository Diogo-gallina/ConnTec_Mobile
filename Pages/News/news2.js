
import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Text,
  FlatList
} from "react-native"; //importando componentes

export default function News2() {

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
                  source={require("../../assets/post3.jpg")}
                />
              </View>

              <View>
                <View style={styles.containerTitlePost}>
                
                  <Text style={styles.txtTitle}>
                  Palestras: Ingressando no mercado de trabalho  
                  </Text>
                </View>

                <View style={styles.description}>
                  <Text style={styles.txtDescription}>
                  Quinta-feira dia 30/06 receberemos na Etec Taboão da Serra um convidado especial que vem com a proposta de direcionar o futuro de nossos alunos.
                  </Text>
                </View>

                <View style={styles.contaiterTxtNews}>

                <View style={styles.containerSubtitle}>  
                    <Text style={styles.txtSubtitulo}>
                        # Fase 0
                    </Text>
                </View>

                <View style={styles.containerTxt}>
                    <Text style={styles.txt}>
                    Existe uma necessidade de pré-preparação antes de tentar se colocar no mercado de desenvolvimento. É mais uma fase de autoconhecimento das suas habilidades pessoais acrescido de uma pequena parte técnica. E pra mim, essa é a fase 0. Relaxa que é jogo rápido!
                    </Text>
                    
                    <Text style={styles.txt}>
                    Ela é composta por 2 trilhas que a gente pode dividir em: soft skils e hard skills
                    </Text>

                </View>

                <View style={styles.containerSubtitle}>  
                    <Text style={styles.txtSubtitulo}>
                    Soft Skills
                    </Text>
                </View>

                <View style={styles.containerTxt}>
                    <Text style={styles.txt}>
                    Habilidades que não são técnicas para o trabalho que você vai executar, mas sim para qualquer tipo de trabalho! São habilidades que compõem o perfil e a personalidade do profissional:
                    </Text>
                    
                    <Text style={styles.txt}>
                    Produtividade;
                    </Text>

                    <Text style={styles.txt}>
                    Organização;
                    </Text>

                    <Text style={styles.txt}>
                    Boa comunicação;
                    </Text>

                    <Text style={styles.txt}>
                    Capacidade pra trabalhar em grupo;
                    </Text>

                    <Text style={styles.txt}>
                    e o maior clichê do mundo, mas não menos importante: ~ Proatividade ~
                    </Text>

                    <Text style={styles.txt}>
                    Hoje em dia isso é MUITO valorizado no mercado de TI (em todos os outros também rs). Destaque para trabalho em grupo e comunicação
                    </Text>

                </View>

                <View style={styles.containerSubtitle}>  
                    <Text style={styles.txtSubtitulo}>
                    Hard Skills
                    </Text>
                </View>

                <View style={styles.containerTxt}>
                    <Text style={styles.txt}>
                    Essas são as habilidades mais técnicas da parada. Isso é o que você, de fato, irá usar na jornada de trabalho, o que vai dizer se você está capacitado ou não pra realizar determinada tarefa.
                    </Text>
                    
                    <Text style={styles.txt}>
                    Pra começar a se aperfeiçoar na área, existe um repositório no Github que exibe um guia (bem atualizado, do começo desse ano de 2019) muito massa sobre o desenvolvimento web. Pra mim, ele é o ponto de partida perfeito.
                    </Text>

                    <Text style={styles.txt}>
                    Se você não sabe o que é o “Github”, tem um post bem legal aqui na tableless: Tudo que você queria saber sobre Git e GitHub, mas tinha vergonha de perguntar
                    </Text>

                </View>

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
  },

  containerTxt:{
    alignSelf:"center",

    marginTop:20,
    width:'96%'
  },

  txt:{
    fontFamily: "HelveticaNeue",
    color: "gray",
    fontSize:19,
    marginTop:10
  },

  containerSubtitle:{
    marginTop:30,
    width:"90%",
    
  },

  txtSubtitulo:{
    fontFamily: "HelveticaNeue",
    color: "#000",
    fontSize:24, 
    fontWeight:"bold"
  },


});
