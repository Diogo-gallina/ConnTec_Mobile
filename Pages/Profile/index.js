import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity, RefreshControl } from 'react-native'; //importando componentes
import Constants from 'expo-constants';
import { Ionicons , MaterialIcons } from '@expo/vector-icons' //importando icons 
import * as ImagePicker from 'expo-image-picker'; //importando o imagePicker para a imagem de perfil

export default function Profile({navigation}) {
  
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
  
   
  const [image, setImage] = React.useState(null);
  
 async function escolherImagem(){
   let result = await ImagePicker.launchImageLibraryAsync({
     mediaTypes: ImagePicker.MediaTypeOptions.Images,
     allowsEditing: true,
     quality:1
   });

   if (!result.cancelled){
     setImage(result.uri);
  }
}
  
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image style={{  marginTop:'10%',
                         height:60,
                         width:60,
                         alignSelf:'center'
                         }} source={require('../../assets/logoConn.png')}></Image>
      </View>

      <View style={{alignSelf:'center', marginTop: '10%'}}>
          <View style={styles.profileImage}>
            {image &&
              <Image source={{uri:image}} style={{width: 200, height: 200, borderRadius: 100, overflow: 'hidden'}} ></Image>
            }
          </View>
        
          <TouchableOpacity  onPress={() => navigation.navigate('Chat')} style={styles.dm}>
            <MaterialIcons name='chat' size={18} color='white'></MaterialIcons>
          </TouchableOpacity>
        
          <View style={styles.active}></View>
          <View style={styles.offline}></View> 

          <TouchableOpacity onPress={escolherImagem} style={styles.add}>
            <Ionicons name='ios-add' size={48} color='white' style={{ marginLeft: 2}}></Ionicons>
          </TouchableOpacity>
      </View>

      <View style={styles.containerInfo}>
        <Text style={[styles.text, { fontWeight:'200', fontSize: 36}]}> Erik Alves </Text>
        <Text style={[styles.text, {fontSize: 14, color:'#AEB5BC'}]}> Desenvolvimento de sistemas </Text>
      </View>

      <View style={styles.containerfunc}>
        <View style={styles.buttonMensage}>
          <Ionicons name='notifications' size={24} color='white'></Ionicons>
        </View>
      </View>
  
      <ScrollView 
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
          }>
        <TouchableOpacity style={[styles.containerMensage, {marginTop:20}]}>
              <Text style={styles.remententeMensage}> Etec Do Taboão</Text>
              <Text style={styles.mensage}> Não haverá aula no dia 16/05</Text>
              <Text style={[styles.hoursMensage, { marginTop:40 }]}> 12:29 </Text> 
              <Text style={[styles.dateMensage, { marginTop:20 }]}> Hoje </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.containerMensage}>
              <Text style={styles.remententeMensage}> Etec Do Taboão</Text>
              <Text style={styles.mensage}> Venha participar da Semana Paulo Freire</Text>
              <Text style={[styles.hoursMensage, { marginTop:40 }]}> 16:34 </Text> 
              <Text style={[styles.dateMensage, { marginTop:20 }]}> Ontem </Text> 
        </TouchableOpacity>

        <TouchableOpacity style={styles.containerMensage}>

                <Text style={styles.remententeMensage}> Secretária </Text>
                <Text style={styles.mensage}> Professor Marcos Renato não comparecerá...</Text>
                <Text style={[styles.hoursMensage, { marginTop:40 }]}> 16:59 </Text> 
                <Text style={[styles.dateMensage, { marginTop:20 }]}> Ontem </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.containerMensage}>
              <Text style={styles.remententeMensage}> Etec do Taboão</Text>
              <Text style={styles.mensage}> Cardápio venha conferir!!</Text>
              <Text style={[styles.hoursMensage, { marginTop:40 }]}> 13:59 </Text>
              <Text style={[styles.dateMensage, { marginTop:20 }]}> 24/04 </Text> 
        </TouchableOpacity>
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
  profileImage:{ //imagem de perfil
    backgroundColor:'#e5e5e5',
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
  },
  dm:{ //button chat
    backgroundColor: '#41444B',
    position:'aboslute',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems:'center',
    justifyContent:'center',
    bottom:190
  },
  active:{ //icon online
    backgroundColor:'#34FF89',
    position:'absolute',
    bottom: 70,
    left: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10
  }, //so descomentar que tem o icon de offline
  // offline:{ 
  //   backgroundColor:'red',
  //   position:'absolute',
  //   bottom: 70,
  //   left: 10,
  //   padding: 4,
  //   height: 20,
  //   width: 20,
  //   borderRadius: 10
  // },
  add:{ //button de trocar imagem de perfil
    backgroundColor: '#41444B',
    position:'absolute',
    bottom: 30,
    right: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems:'center',
    justifyContent:'center',
  },
  containerInfo:{ //container das informações - nome/curso
    alignItems:'center',
    alignSelf:'center',
    bottom:'2%'
  },
  containerfunc:{ //container icon notificações
    flexDirection:'row',
    alignSelf:'center',
    marginTop:20,
    bottom:10,
  },
    buttonMensage:{ //button notificações
    backgroundColor: '#b20000',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    marginEnd:'10%',
    marginTop:'30%'
  },
  containerMensage:{ //container mensagem - individual
    backgroundColor:'#e5e5e5',
    borderRadius:40,
    height:"40%",
    width:'80%',
    alignSelf:'center',
    marginTop:'7%',            
    bottom:15,
    shadowColor: 'rgba(171, 180, 189, 0.35)',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 10,
    shadowRadius: 5,
    
  },
  iconMensage:{ //icone chat
    width:30,
    height:30,
    position:'absolute',
    marginLeft:'5%',
    marginTop:"6%"
  },
  remententeMensage:{ //nome do rementente
    fontSize:'150%',
    fontWeight:'200',
    marginTop:'5%',
    marginLeft:'5%',
    color:'#b20000'
  },
  mensage:{ //mensagem em si
    fontWeight:'500',
    marginLeft:'5%',
    marginRight:'15%',
    marginTop:'15%',
    position:'absolute',
    fontSize:'100%'
  },
  hoursMensage:{ //horario de envio
    marginTop:'10%',
    marginLeft:'80%',
    color:'gray',
    fontSize:"120%",
    fontWeight:'300',
    position:'absolute'
  },
  dateMensage:{ //data de envio
    marginTop:'10%',
    marginLeft:'75%',
    color:'#b20000',
    fontSize:"120%",
    fontWeight:'300',
    position:'absolute'
  }
  });
