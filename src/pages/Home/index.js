//importando React e componentes

import React from 'react';
import { StyleSheet, SafeAreaView, View, Image, TouchableHighlight } from 'react-native';

import {  Feather } from '@expo/vector-icons';
//Início função Home


export function Home({navigation}) {


  const Profile = () => {
    navigation.reset({
        index: 0,
        routes: [{name: "Profile"}]
    })
}

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
      
      <View style={{flex:1, backgroundColor: 'blue'}}>

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