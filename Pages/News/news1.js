
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

export default function News1() {

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
                  Uma das características mais fortes do PHP é o jeito como ele trata formulários HTML. O conceito básico que é importante entender é que qualquer elemento de formulário irá automaticamente ficar disponível para seus scripts PHP. Por favor leia a seção Variáveis externas do PHP para mais informações e exemplos de como usar formulários com PHP. Aqui vai um exemplo de formulário HTML:

Exemplo #1 Um simples formulário HTML

Não há nada de especial neste formulário. É um formulário HTML comum sem nenhuma tag especial de qualquer tipo. Quando o usuário preencher este formulário e clicar no botão enviar, a página action.php é chamada. Neste arquivo nós teremos algo como isto:

Exemplo #2 Imprimindo dados de nosso formulário

Hi php echo htmlspecialchars($_POST['name']);.
You are php echo (int)$_POST['age']; years old.
Um exemplo de saída deste script seria:

Hi Joe. You are 22 years old.
Para além de htmlspecialchars() e (int), deve ser óbvio o que o script faz. htmlspecialchars() transforma caracteres que sejam especiais no HTML na sua forma codificada, de forma que não seja possível injetar tags HTML ou JavaScript em sua página. O campo age (idade), por ser um número, podemos simplesmente converter para um integer que automaticamente eliminará qualquer caractere estranho. Você também pode fazer o PHP automaticamente fazer isso utilizando a extensão filter. As variáveis $_POST['name'] e $_POST['age'] são criadas automaticamente pelo PHP. Anteriormente utilizamos a superglobal $_SERVER; acima mostramos que a superglobal $_POST contém todos os dados POST. Perceba como o method (método) do formulário é POST. Se fosse utilizado o método GET então os dados do formulário acabariam na superglobal $_GET. Você também pode utilizar a superglobal $_REQUEST, se não se importar qual a origem do dado enviado. Ela conterá os dados mesclados de origens GET, POST e COOKIE.

Você também pode utilizar XForms no PHP, embora se sinta confortável com os formulários HTML clássicos por um bom tempo. Embora trabalhar com XForms não seja para iniciantes, você pode se interessar por eles. Há uma seção com uma rápida introdução sobre manipular dados recebidos de XForms no manual.
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
