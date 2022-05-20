import React, {useState,useEffect} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import { Input } from 'react-native-elements'; //importando componentes
import {Ionicons} from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as LocalAuthentication from 'expo-local-authentication';

export default function Login({navigation}) 
{ 
    const goCadastro = () => {
    navigation.reset({
        index: 0,
        routes: [{name: "SingUp"}]
    });
}
  //Declarando variaveis

  const [errorEmail, setErrorEmail] = useState(null)
  const [errorSenha, setErrorSenha] = useState(null)

  const [hidePass, setHidePass] = useState(true)

  const [email, setEmail] = useState(null)
  const [senha, setSenha]=useState(null)
  const [login, setLogin]=useState(null);


//verificar se o login é verdadeiro e chamar a biometria
  useEffect(()=>{
    verifyLogin();
},[]);
useEffect(()=>{
    if(login === true){
        biometric();
    }
},[login]);
  
  //função para verificar se o login é verdadeiro
  async function verifyLogin()
{
    let response=await AsyncStorage.getItem('userData');
    let json=await JSON.parse(response);
    if(json !== null){
        setEmail(json.email);
        setSenha(json.senha);
        setLogin(true);
    }
}


//Função para chamar a biometria
async function biometric()
{
    let compatible= await LocalAuthentication.hasHardwareAsync();
    if(compatible){
        let biometricRecords = await LocalAuthentication.isEnrolledAsync();
        if(!biometricRecords){
            alert('Biometria não cadastrada. Logue com seu email e senha');
        }else{
            let result=await  LocalAuthentication.authenticateAsync();
            if(result.success){
                sendForm();
            }else{
                setEmail(null);
                setSenha(null);
            }
        }
    }
}
  
  //função para enviar o formulario para o controller
  async function sendForm()
    {
        let response=await fetch('http://192.168.1.74:3000/login',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                senha: senha
            })
        });
        let json=await response.json();
        if(json === 'error'){
            setErrorEmail("Email ou Senha errados!")
            setErrorSenha("Email ou Senha errados!")
            await AsyncStorage.clear();
      }else{
          await AsyncStorage.setItem('userData', JSON.stringify(json));
          navigation.navigate('Home');
          } 
    }

  //Fazendo as constante para validação de campos.
  const validar = () =>{
    let error = false;
    setErrorEmail(null)
    setErrorSenha(null)

    const re = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i
    if (!re.test(String(email).toLowerCase())){
      setErrorEmail("Preencha seu E-mail corretamente!")
      error = true
    }
    if(senha == null){
      setErrorSenha("Senha não pode ficar vázia.")
      error = true
    }
    if(senha.length < 4){
      setErrorSenha("Senha não pode ser menor que 4 caracteres.")
      error = true
    }
    return !error
  } 

  //Chamada para verificação das validações
  const salvar = () => {
    if (validar()){
      sendForm()
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
                placeholder="Digite seu e-mail" 
                autocorrect={false} 
                onChangeText={value => setEmail(value)}
                errorMessage={errorEmail}
                />

              <Input 
                style={styles.input} 
                placeholder="Digite sua senha" 
                autocorrect={false} 
                onChangeText={value => setSenha(value)} 
                secureTextEntry={hidePass}
                errorMessage={errorSenha}
                />

            <TouchableOpacity style={styles.eye} onPress={ () => setHidePass(!hidePass) }>
              { hidePass ?
               <Ionicons name="eye" color="black" size={25} />
               :
               <Ionicons name="eye-off" color="black" size={25} /> 
              }
            </TouchableOpacity>
                  
            </View>
              
            <Text style={styles.txtForgot}>Esqueceu a senha?</Text>

              <TouchableOpacity style={styles.submitContainer} onPress={()=>salvar()}>
                
                  <Text style={{fontFamily:'Avenir Next', 
                                color:'#fff', 
                                fontWeight:'600', 
                                fontSize: 16}}>Entrar</Text>
                               
                
              </TouchableOpacity>
              
              <Text style={{fontFamily:'Avenir Next', 
                            fontsize: 14, 
                            color: '#ABB4BD', 
                            textAlign:'center', 
                            marginTop: 24}}>
                                
                                Não tem uma conta? <TouchableOpacity style={{flex:1}} onPress={()=>goCadastro()}>
                            <Text style={styles.txtForgot}>Registre-se agora!</Text>
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
    eye:{
      position: 'absolute',
      right: '1.5%',
      top: '60%'
    }
});