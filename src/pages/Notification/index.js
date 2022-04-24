//Importando componentes 
import {ScrollView , SafeAreaView, StyleSheet, Text, View, TouchableHighlight, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {  Feather } from '@expo/vector-icons';

//Iniciando tela notificação.
export function Notification() {
 
  return (

    <ScrollView>
        <SafeAreaView style={{backgroundColor:'#fff'}}> 

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

            <View style={{ padding:10 , }}>
                <View style={styles.container}>
                    <View style={{marginTop: 1, marginBottom: 1}}>
                
                {/*Criando botão com icone*/}   
                    <Icon.Button                  
                        name="envelope-square"
                        size={70}
                        color='black'
                        backgroundColor="#f0f0f0"
                        borderRadius={20}
                        onPress={() => entrarNotificacao()}>
                        
                        <Text style={styles.texto}>Seja bem vindo!, acesse nosso site para mais...</Text>
                        <Text style={styles.date}>18/04/2022</Text>
                    </Icon.Button>

                    </View> 
                </View>

                <View style={styles.container}>
                    <View style={{marginTop: 1, marginBottom: 1}}>
                
                {/*Criando botão com icone*/}   
                    <Icon.Button                  
                        name="envelope-square"
                        size={70}
                        color='black'
                        backgroundColor="#f0f0f0"
                        borderRadius={20}
                        onPress={() => entrarNotificacao()}>
                        
                        <Text style={styles.texto}>Seja bem vindo!, acesse nosso site para mais...</Text>
                        <Text style={styles.date}>18/04/2022</Text>
                    </Icon.Button>

                    </View> 
                </View>
            </View>
        </SafeAreaView>
    </ScrollView>

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

    container:{
        marginTop: 20
    },

    texto:{
        fontFamily:'verdana',
        fontSize:14,
        fontWeight:'bold',
        alignContent:'center',
        alignItems:'center',
        textAlign:'center',
        padding:18,
        marginTop:20
    },

    viu:{
        margin:10
    },

    date: {
        fontFamily:'verdana',
        fontSize:12,
        fontWeight:'bold',
        textAlign:'right',
        marginTop:10,
        marginVertical:60,
        marginLeft:10
    },


});