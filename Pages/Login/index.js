import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'; //importando componentes
import Constants from 'expo-constants';
import { KeyboardAvoidingView } from 'react-native-web';

export default function Login({navigation}) { //funcao login
  return (
    <View style={styles.container}>
        <View style={{ marginTop:'10%', 
                       alignItems:'center', 
                       justifyContent:'center'}}>
        <View>
          <Image style={{marginTop:'10%',
                         height:200,
                         width:200}
                         } source={require('../../assets/logoConn.png')}></Image> 
        </View>
        
        <KeyboardAvoidingView style={styles.containerInput}>
          <TextInput 
            style={styles.input} 
            placeholder="E-mail" 
            autocorrect={false} 
            onChangeText={()=>{}}/>

          <TextInput 
            style={styles.input} 
            placeholder="Senha" 
            autocorrect={false} 
            onChangeText={()=>{} } 
            secureTextEntry={true}/>
              
        </KeyboardAvoidingView>
              
        <TouchableOpacity onPress={() => navigation.navigate('')}>
          <Text style={styles.txtForgot}>Esqueceu sua Senha?</Text>
        </TouchableOpacity>
              
        <TouchableOpacity style={styles.submitContainer} onPress={() => navigation.navigate('Home')}>
          <View>
            <Text style={{ 
                          color:'#fff', 
                          fontWeight:'600', 
                          fontSize: '100%'}}>Login</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={{ 
                      fontsize: '20%', 
                      color: '#ABB4BD', 
                      textAlign:'center', 
                      marginTop: '10%'}}>Não tem uma conta? <Text style={styles.txtForgot}>Registre-se</Text>
        </Text>
        </TouchableOpacity>
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{ //container principal
      flex:1,
    },
     txtForgot:{ //esqueceu sua senha?
      color: '#FF1654',
      fontWeight:'500',
      marginTop: "10%",
      fontSize:'100%'
    },
    submitContainer:{ //button de login
      backgroundColor:'#B20000',
      fontSize: '100%',
      borderRadius: 50,
      height: '10%',
      marginTop: "5%",
      alignItems:'center',
      justifyContent:'center',
      shadowColor: 'rgba (255, 22, 84, 0.24)',
      shadowOffset: {width: 0, height: 9},
      shadowOpacity: 1,
      shadowRadius: 20,
      width:'90%'
    },
    input:{ // e-mail, senha
      width: '95%',
      color: '#b20000',
      fontSize: "130%",
      padding:"5%",
      borderBottomColor:'#D8D8D8',
      borderBottomWidth:1
    },
    containerInput:{
      alignItems:'center',
      width:'90%',
      marginTop:'5%'
          
    },
});
