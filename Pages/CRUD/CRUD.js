import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Ionicons , MaterialIcons } from '@expo/vector-icons'


export default function Crud({navigation}) {
  return (
    <SafeAreaView style={styles.container}>

        <View style={styles.title}>
          <Text style={[styles.text, { fontWeight:'200', fontSize: 36}]}> CRUD </Text>
          <Text style={[styles.text, {fontSize: 14, color:'#AEB5BC', marginTop:8}]}> Desenvolvimento de sistemas </Text>
        </View>

        <View>
          <TouchableOpacity style={styles.buttonCreateUser}>
            <Ionicons name='add' size={30} color='white'></Ionicons>
          </TouchableOpacity>
        </View>
    
        <ScrollView style={{marginTop:30}}>
          <View style={[styles.containerUsers, {marginTop:20}]}>
              <Text style={styles.nameUser}> Erik Alves Da Silva</Text>
                
                <TouchableOpacity style={styles.buttonEditUser} onPress={() => navigation.navigate('EditUser')}>
                  <Ionicons name='md-create' size={30} color='white'></Ionicons>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonDeleteUser}>
                  <Ionicons name='ios-close' size={30} color='white'></Ionicons>
                </TouchableOpacity>
          
          </View>
        </ScrollView>
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { //flex principal perfil
    flex:1
  },
  text:{ //predefinicao de texto pronta
    color:'#52575D',
  },
  title:{ //title crud/ds
    alignItems:'center',
    alignSelf:'center',
    bottom:20,
  marginTop: 50
  },
  buttonCreateUser:{ //button criar usuarios
    backgroundColor: 'green',
    position:'aboslute',
    width: 145,
    height: 40,
    borderRadius: 20,
    alignItems:'center',
    justifyContent:'center',
    bottom:2,
    alignSelf:'center',
    marginEnd:10,
  },
  containerUsers:{ //container users - individual
    backgroundColor:'#e5e5e5',
    borderRadius:40,
    height:100,
    marginLeft:15,
    marginTop:13,
    marginRight:15,            
    bottom:15,
    shadowColor: 'rgba(171, 180, 189, 0.35)',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 5,
    shadowRadius: 10,
    justifyContent:"center"
    
  },
  nameUser:{ //nome do user
    fontSize:20,
    fontWeight:'400',
    marginLeft:15
  },
  buttonEditUser:{ //button edit user
    height: 45,
    width: 45,
    marginTop:70,
    marginLeft:260,
    borderRadius: '50%',
    backgroundColor: 'green',
    fontSize:20,
    fontWeight:'300',
    position:'absolute',
    alignItems:'center',
    justifyContent:'center'
  },
  buttonDeleteUser:{ //button delete user
    height: 45,
    width: 45,
    marginTop:70,
    marginLeft:310,
    borderRadius: '50%',
    backgroundColor: 'red',
    fontSize:20,
    fontWeight:'300',
    position:'absolute',
    alignItems:'center',
    justifyContent:'center'
  },
});
