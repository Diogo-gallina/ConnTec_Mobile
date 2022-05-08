//importando React e componentes

import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Image, 
  Icon, 
  TextInput,
  TouchableWithoutFeedback,
  SafeAreaView,
  TouchableHighlight

} from 'react-native';

import { Feather, Ionicons} from '@expo/vector-icons';

import { CommonActions } from '@react-navigation/native';

//Início função Search

export function Search({navigation}) {

  const Avisos = () => {
    navigation.reset({
        index: 0,
        routes: [{name: 'Avisos'}]
    })
  }

  const Calendario = () => {
    navigation.reset({
        index: 0,
        routes: [{name: 'Calendario'}]
    })
  }

  const Gremio = () => {
    navigation.reset({
        index: 0,
        routes: [{name: 'Gremio'}]
    })
  }

  const Estagios = () => {
    navigation.reset({
        index: 0,
        routes: [{name: 'Estagios'}]
    })
  }

  const AchadosPerdidos = () => {
    navigation.reset({
        index: 0,
        routes: [{name: 'AchadosPerdidos'}]
    })
  }

  const Cardapio = () => {
    navigation.reset({
        index: 0,
        routes: [{name: 'Cardapio'}]
    })
  }

 const Profile = () => {
    navigation.reset({
        index: 0,
        routes: [{name: "Profile"}]
    })
}

  return (
    <SafeAreaView style={styles.background}>

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
        
        {/*Criando input da barra de buscas*/}

        <TextInput 
          style={styles.input}
          placeholder="       Buscar" 
          autocorrect={false}
          onChangeText={()=>{} }
        />
        
        <Ionicons 
          name='search' 
          size={25} 
          color="#B20000"
          style={styles.icon}
        />

        {/*Criando botões de navegação*/}

        <View style={styles.positionBottoms}>

          <TouchableOpacity style={styles.bottom1} onPress={()=> Avisos()}>

            <Text style={[styles.btntext]}>Avisos</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.bottom2} onPress={()=> Calendario()}>

            <Text style={[styles.btntext]}>Calendário</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.bottom3} onPress={()=> Gremio()}>

            <Text style={[styles.btntext]}>Grêmio</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.bottom4} onPress={()=> Estagios()}>

            <Text style={[styles.btntext]}>Estágios</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.bottom5} onPress={()=> AchadosPerdidos()}>

            <Text style={[styles.btntext]}>Achados e                       perdidos</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.bottom6} onPress={()=> Cardapio()}>

            <Text style={[styles.btntext]}>Cardápio</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.bottom7} onPress={()=> Access()}>

            <Text style={[styles.btntext]}>Dashboard6</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.bottom8} onPress={()=> Access()}>

            <Text style={[styles.btntext]}>Dashboard6</Text>

          </TouchableOpacity>
        </View>

    </SafeAreaView>
  );
}

//Estilizando a tela

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

  background:{
    backgroundColor:'#FFF',
    flex: 1
  },

  input: {
    backgroundColor:'#F8F8FF',
    width: '90%',
    marginBottom:15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding:10,
    marginTop: 17,
    alignSelf: 'center'
  },

  icon:{
    position:'absolute',
    left: 26,
    top: 88,
  },

  positionBottoms:{ 
    flexWrap: "wrap",
    marginTop: 8,
    flexDirection: "row",
  },

  bottom1: {
    backgroundColor: '#b20000',
    width: 150,
    height: 90,
    borderRadius: 7,
    marginTop: 30,
    marginLeft: 20,
  },

  btntext:{
    fontSize:14,
    fontWeight: "bold",
    fontFamily: 'verdana',
    marginTop: 15,
    marginLeft: 10,
    color:'white'
  },

  bottom2: {
    backgroundColor: '#b20000',
    width: 150,
    height: 90,
    borderRadius: 7,
    marginTop: 30,
    marginLeft: 20,
  },

  bottom3: {
    backgroundColor: '#b20000',
    width: 150,
    height: 90,
    borderRadius: 7,
    marginTop: 40,
    marginLeft: 20,
  },

  bottom4: {
    backgroundColor: '#b20000',
    width: 150,
    height: 90,
    borderRadius: 7,
    marginTop: 40,
    marginLeft: 20,
  },

  bottom5: {
    backgroundColor: '#b20000',
    width: 150,
    height: 90,
    borderRadius: 7,
    marginTop: 40,
    marginLeft: 20,
  },

  bottom6: {
    backgroundColor: '#b20000',
    width: 150,
    height: 90,
    borderRadius: 7,
    marginTop: 40,
    marginLeft: 20,
  },

  bottom7: {
    backgroundColor: '#b20000',
    width: 150,
    height: 90,
    borderRadius: 7,
    marginTop: 40,
    marginLeft: 20,
  },

  bottom8: {
    backgroundColor: '#b20000',
    width: 150,
    height: 90,
    borderRadius: 7,
    marginTop: 40,
    marginLeft: 20,
  },

  
})
