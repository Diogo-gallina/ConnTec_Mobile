import React, {useState, useEffect} from 'react';
import {View, Alert, StyleSheet, Image, TouchableOpacity, ScrollView, BackHandler } from 'react-native'; //importando componentes
import {Input, Text} from 'react-native-elements';
import {Ionicons} from '@expo/vector-icons';

export default function Cadastro({navigation}) { //funcao login

    const goLogin = () => {
        navigation.reset({
            index: 0,
            routes: [{name: "SingIn"}]
        });
    }
    const [email, setEmail] = useState(null)
    const [name, setName] = useState(null)
    const [senha, setSenha] = useState(null)
    const [confirmSenha, setConfirmSenha] = useState(null)
    const [errorEmail, setErrorEmail] = useState(null)
    const [errorName, setErrorName] = useState(null)
    const [errorSenha, setErrorSenha] = useState(null)
    const [errorConfirmSenha, setErrorConfirmSenha] = useState(null)
    const [hidePass, setHidePass] = useState(true)
    const [hidePass2, setHidePass2] = useState(true)

    async function sendForm()
    {
        let response = await fetch('http://192.168.43.164:3000/cadastro',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                name: name,
                senha: senha,
                 
            })
        });
        let json=await response.json();
        if(json === 'error'){
            setErrorEmail("Email já cadastrado!!")
            }else{
              Alert.alert(
                'Seu usuario foi cadastrado com sucesso!',
                'Logue com ele agora! ;D',
                [
                  { text: 'Ir para o login', onPress: () => navigation.navigate('SingIn') },
                ],
                { cancelable: false }
                );
            }
    }

        //Função para o botão de voltar
        useEffect(() => {
          const backAction = () => {
              Alert.alert("Alerta!", "Deseja voltar para a tela de login?", [
                  {
                      text: "Não",
                      onPress: () => null,
                      style: "cancel"
                  },
                  { text: "Sim", onPress: () => {
                    navigation.navigate('SingIn');
                      }
                  }
              ]);
              return true;
          };
      
          const backHandler = BackHandler.addEventListener(
              "hardwareBackPress",
              backAction
          );
      
          return () => backHandler.remove();
      }, []);
    
    const validar = () =>{
      let error = false;
      setErrorEmail(null)
      setErrorName(null)
      setErrorSenha(null)
      setErrorConfirmSenha(null)

    const re = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i
    const re2 = /^[A-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-ZÀ-Ÿ][A-zÀ-ÿ']+$/i

    if (!re.test(String(email).toLowerCase())){
      setErrorEmail("Preencha seu E-mail corretamente.")
      error = true
    }
    if (!re2.test(String(name).toLocaleLowerCase())){
      setErrorName("Preencha o nome completo corretamente!")
      error = true
    }
    if(senha.length < 4){
      setErrorSenha("Senha não pode ser menor que 4 caracteres.")
      error = true
    }
    if (email == null){
      setErrorSenha("Preencha o E-mail.")
      error = true
    }
    if (name == null){
      setErrorName("Preencha o Nome.")
      error = true
    }
    if (senha == null){
      setErrorSenha("Preencha a senha.")
      error = true
    }
    if (confirmSenha == null){
      setErrorConfirmSenha("Confirme sua senha.")
      error = true
    }
    else{
       if(senha !== confirmSenha) {
        setErrorConfirmSenha("As senhas não pode ser diferentes.")
        error = true
      }
    }
    
    return !error
    
  }
  
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
              maxLength={100}
              autocorrect={false} 
              keyboardType="email-address"
              onChangeText={value => setEmail(value) }
              errorMessage={errorEmail}
            />

            <Input 
              style={styles.input} 
              placeholder="Digite seu nome completo" 
              maxLength={30}
              autocorrect={false}
              onChangeText={value => setName(value) }
              errorMessage={errorName}
            />

            <Input 
              style={styles.input} 
              placeholder="Digite sua senha" 
              autocorrect={false}
              maxLength={30} 
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


            <Input 
              style={styles.input} 
              placeholder="Confirme sua senha" 
              autocorrect={false} 
              maxLength={30}
              onChangeText={value => setConfirmSenha(value) }  
              secureTextEntry={hidePass2}
              
            
              
              errorMessage={errorConfirmSenha}
            />

            <TouchableOpacity style={styles.eye2} onPress={ () => setHidePass2(!hidePass2) }>
              { hidePass2 ?
               <Ionicons name="eye" color="black" size={25} />
               :
               <Ionicons name="eye-off" color="black" size={25} /> 
              }
            </TouchableOpacity>
              
          </View>
              

            <TouchableOpacity style={styles.submitContainer}  onPress={() => salvar()} >
                <View>
                  <Text style={{fontFamily:'Arial', 
                                color:'#fff', 
                                fontWeight:'600', 
                                fontSize: 16
                                }}>Registrar-se 
                  </Text>
                </View>
            </TouchableOpacity>
              
              <Text style={{fontFamily:'Arial', 
                            fontSize: 14, color: '#ABB4BD', 
                            textAlign:'center', 
                            marginTop: 24}}>Tem uma conta? <TouchableOpacity style={{flex:1}} onPress={()=>goLogin()}>
                            <Text style={styles.txtForgot}>Vá para o login</Text>
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
      fontFamily:'Arial',
      color:'black',
      marginTop: 7
    },
    txtOr:{ // texto 'or'
      color: '#ABB4BD',
      fontSize: 25,
      textAlign:'center',
      marginVertical: 20
    },
    txtForgot:{ //esqueceu sua senha?
      fontFamily:'Arial',
      color: '#FF1654',
      fontSize: 14,
      fontWeight:'500',
      marginTop: 30
    },
    submitContainer:{ //button de registrar
      backgroundColor:'#B20000',
      fontSize: 16,
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
      fontFamily:'Arial',
      borderBottomColor:'#D8D8D8',
      borderBottomWidth:1
    },
    containerInput:{
      alignItems:'center',
      width:'90%',
          
    },
    sucess: {
      color:'green'
    },
    error: {
      color:"red"
    },
    eye: {
      position: 'absolute',
      right: '3%',
      top: '55%'
    },
    eye2: {
      position: 'absolute',
      right: '3%',
      top: '80%'
    }
});
