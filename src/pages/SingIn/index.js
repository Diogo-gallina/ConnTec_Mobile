import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'; //importando componentes

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
  const [Users, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [status, setStatus] = useState ({
    type: '',
    mensagem: ''
  });

  const valueInput = e => setUser({ ...Users, [e.target.name]: e.target.value})

  const addUser = async e => {
    e.preventDefault();

    if(!validate()) return;

    const saveDataForm = true;

    if (saveDataForm) {
      setStatus({
        type: 'sucess',
        mensagem: 'Usuário ccadastrado om sucesso!'
      });
      setUser ({
        name: '',
        email: '',
        password: ''
      })
    } else {
      setStatus({
        type: 'error',
        mensagem: "Erro: Usuário não cadastrado!"
      })
    }
  }

  function validate(){
    if(!Users.name) return setStatus({type: 'error', mensagem: 'Necessario cadastrar o campo Nome'})
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
              <TextInput 
                style={styles.input} 
                placeholder="E-mail" 
                autocorrect={false} 
                name='name'
                onChangeText={()=>{}}/>

              <TextInput 
                style={styles.input} 
                placeholder="Password" 
                autocorrect={false} 
                onChangeText={()=>{} } 
                secureTextEntry={true}/>
                  
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