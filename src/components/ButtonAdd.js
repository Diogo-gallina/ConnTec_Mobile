import React from 'react';
import {StyleSheet, View, Text } from 'react-native';

import {Entypo} from '@expo/vector-icons'

export function ButtonAdd({size, color}) {
  return (
    <View style={styles.container}>
        <Entypo name="plus" color={color} size={30} />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#B20000',
        justifyContent: 'center',
        textAlign: 'center',
        marginBottom: 20

    },
    
});