import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import Constants from 'expo-constants';
import { Ionicons , MaterialIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';

export default function NewPassword({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
        
        <View style={{alignSelf:'center'}}>   
            <View style={styles.profileImage}>
              <Image source={require('../../assets/logoConn.png')} style={styles.image} resizeMode='center'></Image>
            </View>
          
            <TouchableOpacity style={styles.dm}>
              <MaterialIcons name='chat' size={18} color='white'></MaterialIcons>
            </TouchableOpacity>
        </View>

        <View style={styles.containerInfo}>
          <Text style={[styles.text, { fontWeight:'200', fontSize: 46}]}> Erik Alves</Text>
          <Text style={[styles.text, {fontSize: 14, color:'#AEB5BC'}]}> Desenvolvimento de sistemas </Text>
        </View>
        
        <Text style={[styles.text, {fontSize: 20, color:'#b20000', marginStart:20, marginTop:30, fontWeight:'300'}]}>Edit User Name:</Text>

        <View>

          <TextInput 
            style={styles.input} 
            placeholder="Old Name" 
            autocorrect={false} 
            onChangeText={()=>{}}
          />

          <TextInput 
            style={styles.input} 
            placeholder="New Name" 
            autocorrect={false} 
            onChangeText={()=>{}}
          />      
                  
        </View>


        <TouchableOpacity style={styles.buttonEdit}>
            <AntDesign name='arrowright' size={32} color='#fff' />
        </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { //flex principal perfil
    flex:1,
    backgroundColor:'#fff',
  },
  text:{ //predefinicao de texto pronta
    fontFamily: 'HelveticaNeue',
    color:'#52575D',
  },
  containerInfo:{ //container das informações - nome/curso
    alignItems:'center',
    alignSelf:'center',
    bottom:20,
    marginTop: 50
  },
  buttonEdit:{ //button arrow editar
    backgroundColor: '#b20000',
    width: 90,
    height: 90,
    borderRadius: 100,
    alignItems:'center',
    justifyContent:'center',
    bottom:2,
    alignSelf:'center',
    marginEnd:10,
    marginTop:20
  },
  input:{ 
    width: 300,
    color: '#b20000',
    fontSize: 20,
    fontFamily:'HelveticaNeue',
    borderBottomColor:'#D8D8D8',
    borderBottomWidth:1,
    marginTop: 20,
    alignSelf:'center'
  },
  image:{ //flex image profile
    flex: 1,
    height: undefined,
    width: undefined
  },
  profileImage:{ //imagem de perfil
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden'
  },
});
