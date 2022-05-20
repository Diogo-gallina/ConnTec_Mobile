//importando React e componentes

import React, {useState,useEffect} from 'react';
import { StyleSheet, SafeAreaView, View, Image, TouchableHighlight, Text } from 'react-native';

import {  Feather } from '@expo/vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';
//Início função Home


export function Home({navigation}) {

  const Profile = () => {
    navigation.reset({
        index: 0,
        routes: [{name: "Profile"}]
    })
}

const [usuario,setUsuario]=useState(null);

    useEffect(()=>{
        async function getUsuario()
        {
            let response=await AsyncStorage.getItem('userData');
            let json=JSON.parse(response);
            setUsuario(json.usuario);
        }
        getUsuario();
    },[]);

  return (
    <SafeAreaView>

      <View style={styles.header}>
        <Image  
          source={require('../../../assets/connTec-logo.jpg')} 
          style={{width:130, height:65, left:15}}
        /> 

          <TouchableHighlight style={styles.iconHeader} onPress={()=> Profile()}>  
            <Feather 
              name="user" 
              color={'#B20000'} 
              size={30} 
            />
          </TouchableHighlight>
      </View>
      
      <View style={{flex:1, backgroundColor: 'white'}}>
      <Text>Seja bem vindo, {usuario}</Text> 
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  header:{
    backgroundColor: '#F6F6F6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },

  iconHeader:{
    left: 70
  }


})