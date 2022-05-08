//importando React e componentes

import React from 'react';
import { StyleSheet, SafeAreaView, View, Image, TouchableHighlight } from 'react-native';

import { Feather} from '@expo/vector-icons';

//Início função Cardapio

export function Cardapio() {
  return (
    <SafeAreaView>

      <View style={styles.header}>
        <Image  
            source={require('../../../assets/connTec-logo.jpg')} 
            style={{width:130, height:65, left:7}}
        /> 

        <TouchableHighlight style={styles.iconHeader}>  
            <Feather 
            name="chevron-left" 
            color={'#B20000'} 
            size={33} 
            />
        </TouchableHighlight>
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
      position: 'absolute',
      right: '85%'
  },
    
})