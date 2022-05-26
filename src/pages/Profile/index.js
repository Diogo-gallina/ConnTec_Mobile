import React, { useState, useEffect }  from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, TextInput, SafeAreaView, TouchableHighlight, Platform} from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

import { MaterialIcons, Feather  } from '@expo/vector-icons'; 

export default function Profile({navigation}) {

    const [image, setImage] = useState(null);

    useEffect(async () => { 
        if(Platform.OS !== 'android'){
            const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync
            if (status !== 'granted'){
                alert('permissão negada!')
            } 
        }
    },[])

    const PickImage = async () =>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect:[4,3],
            quality:1
        })
        console.log(result)
        if (!result.cancelled) {
            setImage(result.uri)
        }
    }
    
    const VoltarHome = () => {
        navigation.reset({
            index: 0,
            routes: [{name: "AppRoutes"}]
        })
    }

  return(
    <SafeAreaView>
        <View>
            
            <View style={styles.header}>
                <Image  
                    source={require('../../../assets/newLogo.jpg')} 
                    style={{width:130, height:65, left:7}}
                /> 

                <TouchableHighlight style={styles.iconHeader} onPress={()=> VoltarHome()}>  
                    <Feather 
                    name="chevron-left" 
                    color={'#B20000'} 
                    size={33}
                    />
                </TouchableHighlight>
            </View>

            <TouchableOpacity 
                style={styles.btnPhoto}
                title='Escolha uma foto de perfil' 
                onPress={PickImage}>    
                <Feather 
                    name="camera" 
                    color={'#FFF'} 
                    size={28} 
                />
            </TouchableOpacity>
            
            {image && <Image source={{uri:image}} style={{
                width:150,
                height:150,
                borderRadius:50,
                alignSelf: 'center',
            }} />}

            <Text style={styles.txtInputName}>Nome</Text>

            <TextInput style={styles.inputName}
                placeholder="Nome" 
            />

            <Text style={styles.txtInput}>Celular</Text>

            <TextInput style={styles.input1}
                placeholder="Celular" 
                autocorrect={false}
            />

            <Text style={styles.txtInput}>Email</Text>

            <TextInput style={styles.input1}
                placeholder="Email" 
                autocorrect={false}
            />

            <Text style={styles.txtInput}>Turma</Text>

            <TextInput style={styles.input1}
                placeholder="Turma" 
                autocorrect={false}
            />
    
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


    title:{
        fontSize:23,
        fontWeight:"bold",
        fontFamily: "arial",
        color: 'white',
        textAlign: "center",
        marginTop: 15,
    },

    btn1:{
        backgroundColor: "#BA55D3",
        height: 10,
        width: 10,
        alignSelf: "flex-end",
        paddingRight: 50,
    },

    txtPhoto:{
        fontSize:18,
        fontFamily: "arial",
        color: 'white',
        textAlign: "center",
        marginTop:17
    },

    btnPhoto:{
        width:40,
        height:40,
        left: '65%',
        borderRadius: 160,
        backgroundColor: '#B20000',
        marginTop:15,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center'

    },

    txtInputName:{
        fontSize:17,
        fontFamily: "Roboto",
        color: "#696969",
        paddingLeft: 17,
        marginTop:40
    },

    inputName:{
        backgroundColor:'#FFF',
        width: '90%',
        marginBottom:15,
        color: '#222',
        fontSize: 19,
        borderRadius: 7,
        padding:10,
        alignSelf: 'center',
        marginTop: 4
    },

    input1:{
        backgroundColor:'#FFF',
        width: '90%',
        marginBottom:15,
        color: '#222',
        fontSize: 19,
        borderRadius: 7,
        padding:10,
        alignSelf: 'center',
        marginTop: 4
    },

    txtInput:{
        fontSize:17,
        fontFamily: "Roboto",
        color: "#696969",
        paddingLeft: 17,
        marginTop:12
    },
})