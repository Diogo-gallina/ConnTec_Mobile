//importando React e componentes

import React from 'react';
import { StyleSheet, SafeAreaView, View, Image, TouchableHighlight, Button } from 'react-native';
import { Feather} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function Settings({navigation}){

    return(

    <SafeAreaView style={{flex: 1}}>
        <View>

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

            <Icon.Button                  
            name="lock"
            size={45}
            color='black'
            backgroundColor="#f0f0f0"
            borderRadius={7}
            onPress={() => entrarSeguranca()}>
             
              <Text style={styles.texto}>Segurança e Privacidade</Text>
            
          </Icon.Button>




        </View>
    </SafeAreaView>



    );
}

//Criando estilização
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
    },
});
