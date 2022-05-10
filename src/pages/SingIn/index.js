import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Input } from 'react-native-elements'; //importando componentes

export default function Login({navigation}) { 
    const Entrar = () => {
        navigation.reset({
            index: 0,
            routes: [{name: "AppRoutes"}]
        })
    }

    const goCadastro = () => {
        navigation.reset({
            index: 0,
            routes: [{name: "SingUp"}]
        })
    }
  //Declarando variaveis
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const [errorName, setErrorName] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);

  //Fazendo as constante para validação de campos.
  const validar = () =>{
    let error;
    setUser(null)
    setPassword(null)

    if(email == null){
      setErrorPassword("• Email não pode ficar vázio.")
    }
    if(password == null){
      setErrorPassword("• Senha não pode ficar vázio.")
    }
  } 

  //Chamada para verificação das validações
  const salvar = () => {
    if (validar()){
      console.log("Salvou")
    }
  }

  return (
    
    
    <ScrollView style={styles.container}>
        <View style={{ marginTop:30, 
                       alignItems:'center', 
                       justifyContent:'center'}}>
        <View>
        <Image  
                    source={require('../../../assets/logoConn.png')} 
                    style={{width:400, height:250, marginTop: 55}}
                    resizeMode="contain"
                />
        </View>
        
        <View style={{ marginTop: 48,
                       flexDirection:'row', 
                       justifyContent:'center'}}>
                      
        </View>

              
            <View style={styles.containerInput}>
              <Input 
                style={styles.input} 
                placeholder="E-mail" 
                autocorrect={false} 
                name='email'
                onChangeText={value => setEmail(value)}/>

              <Input 
                style={styles.input} 
                placeholder="Password" 
                autocorrect={false} 
                onChangeText={value => setPassword(value) } 
                secureTextEntry={true}
                />
                  
            </View>
              
            <Text style={styles.txtForgot}>Forgot Password?</Text>

              <TouchableOpacity style={styles.submitContainer} onPress={()=>Entrar()}>
                
                  <Text style={{fontFamily:'Avenir Next', 
                                color:'#fff', 
                                fontWeight:'600', 
                                fontSize: 16}}>Login</Text>
                               
                
              </TouchableOpacity>
              
              <Text style={{fontFamily:'Avenir Next', 
                            fontsize: 14, 
                            color: '#ABB4BD', 
                            textAlign:'center', 
                            marginTop: 24}}>
                                
                                Dont have an account? <TouchableOpacity style={{flex:1}} onPress={()=>goCadastro()}>
                            <Text style={styles.txtForgot}>Register Now</Text>
                        </TouchableOpacity>
                        </Text>

      </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#fff'
    },
    socialButton:{ //button login redes sociais
      flexDirection:'row',
      marginHorizontal: 12,
      paddingVertical: 12,
      paddingHorizontal: 30,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: 'rgba(171, 180, 189, 0.65)',
      borderradius: 4,
      backgroundColor:'#fff',
      shadowColor: 'rgba(171, 180, 189, 0.35)',
      shadowOffset: {width: 0, height: 10},
      shadowOpacity: 5,
      shadowRadius: 10,
      elevation: 5,
    },
    socialLogo:{ // icon das redes sociais
      height: 35,
      width: 35,
      marginRight: 8,

    },
    textR:{ //predefinicao pronta para textos
      fontFamily:'Avenir Next',
      color:'black',
      marginTop: 7
    },
    txtOr:{ // texto 'or'
      color: '#ABB4BD',
      fontsize: 25,
      textAlign:'center',
      marginVertical: 20
    },
    txtForgot:{ //esqueceu sua senha?
      fontFamily:'Avenir Next',
      color: '#FF1654',
      fontsize: 14,
      fontWeight:'500',
      marginTop:10
    },
    submitContainer:{ //button de login
      backgroundColor:'#B20000',
      fontsize: 16,
      borderRadius: 4,
      paddingVertical: 12,
      marginTop: 32,
      alignItems:'center',
      justifyContent:'center',
      shadowColor: 'rgba (255, 22, 84, 0.24)',
      shadowOffset: {width: 0, height: 9},
      shadowOpacity: 1,
      shadowRadius: 20,
      width:350
    },
    input:{ // e-mail, senha
      width: 320,
      color: '#FF1654',
      fontSize: 20,
      padding:10,
      fontFamily:'Avenir Next',
      borderBottomColor:'#D8D8D8',
      borderBottomWidth:1
    },
    containerInput:{
      alignItems:'center',
      width:'90%',
          
    },
});