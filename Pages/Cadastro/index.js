import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native';
import Constants from 'expo-constants';

export default function Cadastro({navigation}) {
  return (
    <View style={styles.container}>
        <View style={{ marginTop:'10%', alignItems:'center', justifyContent:'center'}}>
          <View>
              <Image style={{marginTop:'10%',height:200,width:200}} source={require('../../assets/logoConn.png')}></Image>
          </View>
              
          <KeyboardAvoidingView style={styles.containerInput}>
            <TextInput 
              style={styles.input} 
              placeholder="Nome Completo" 
              autocorrect={false} 
              onChangeText={()=>{} }/>

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

            <TextInput 
              style={styles.input} 
              placeholder="Confirme sua senha" 
              autocorrect={false} 
              onChangeText={()=>{} } 
              secureTextEntry={true}/>      
          </KeyboardAvoidingView>
              

          <TouchableOpacity style={styles.submitContainer} onPress={() => navigation.navigate('Onbording')}>
            <View>
              <Text style={{ 
                            color:'#fff', 
                            fontWeight:'600', 
                            fontSize: 16}}>Registre-se
              </Text>
            </View>
          </TouchableOpacity>
              
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{
                        fontsize: '20%', 
                        color: '#ABB4BD', 
                        textAlign:'center', 
                        marginTop: '10%'}}>Tem uma conta? <Text style={styles.txtForgot}>Entre Agora!</Text>
              </Text>
          </TouchableOpacity>

    </View>
</View>
    );
}

const styles = StyleSheet.create({
    container:{ //container principal
      flex:1
    },
    txtForgot:{ //texto do 'entrar agora'
      color: '#FF1654',
      fontsize: '20%',
      fontWeight:'500',
    },
    submitContainer:{ //button register
      backgroundColor:'#B20000',
      fontsize: '100%',
      borderRadius: 50,
      height:'10%',
      marginTop: '5%',
      alignItems:'center',
      justifyContent:'center',
      shadowColor: 'rgba (255, 22, 84, 0.24)',
      shadowOffset: {width: 0, height: 9},
      shadowOpacity: 1,
      shadowRadius: 20,
      width:'90%'
    },
    input:{
      width: '95%',
      color: '#b20000',
      fontSize: '130%',
      padding:'5%',
      borderBottomColor:'#D8D8D8',
      borderBottomWidth:1
    },
    containerInput:{
      alignItems:'center',
      width:'90%',
      marginTop:'10%'
          
    },
});
