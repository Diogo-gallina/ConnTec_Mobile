import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity, Button} from 'react-native'; //importando componentes
import Constants from 'expo-constants';
import { Ionicons , MaterialIcons } from '@expo/vector-icons' //importando icons 
import * as ImagePicker from 'expo-image-picker'; //importando o imagePicker para a imagem de perfil



export default function Profile({navigation}) {
  
  useEffect(async () => { 
    if(Platform.OS !== 'android'){
        const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync
        if (status !== 'granted'){
            alert('permissão negada!')
        } 
    }
  },[])


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
        
        <View style={{alignSelf:'center'}}>
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
    
        <ScrollView>
          <TouchableOpacity style={[styles.containerMensage, {marginTop:20}]}>
            <Image style={styles.iconMensage} source={require('../../../assets/iconM.png')}/>
              <Text style={styles.titleMensage}> MENSAGE </Text>
                <Text style={styles.remententeMensage}> Cesar Adriano de Freitas</Text>
                <Text style={styles.mensage}> Sent you in 2hr at Etec do Taboão.</Text>
                <Text style={[styles.hoursMensage, { marginTop:40 }]}> 12:29 </Text> 
          </TouchableOpacity>

          <TouchableOpacity style={styles.containerMensage}>
            <Image style={styles.iconMensage} source={require('../../../assets/iconM.png')}/>
              <Text style={styles.titleMensage}> MENSAGE </Text>
                <Text style={styles.remententeMensage}> Diogo Correia</Text>
                <Text style={styles.mensage}> Sent you in 24hr at Etec do Taboão.</Text>
                <Text style={[styles.hoursMensage, { marginTop:40 }]}> 16:34 </Text> 
          </TouchableOpacity>

          <TouchableOpacity style={styles.containerMensage}>
            <Image style={styles.iconMensage } source={require('../../../assets/iconM.png')}/>
                <Text style={styles.titleMensage}> MENSAGE </Text>
                  <Text style={styles.remententeMensage}> Gisele Cristina</Text>
                  <Text style={styles.mensage}> Sent you in 12hr at Etec do Taboão.</Text>
                  <Text style={[styles.hoursMensage, { marginTop:40 }]}> 16:59 </Text> 
          </TouchableOpacity>

          <TouchableOpacity style={styles.containerMensage}>
            <Image style={styles.iconMensage} source={require('../../../assets/iconM.png')}/>
              <Text style={styles.titleMensage}> MENSAGE </Text>
                <Text style={styles.remententeMensage}> Paulo Cezar</Text>
                <Text style={styles.mensage}> Sent you in 22hr at Etec do Taboão.</Text>
                <Text style={[styles.hoursMensage, { marginTop:40 }]}> 13:59 </Text> 
          </TouchableOpacity>
        </ScrollView>
        
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
    bottom:20,
  },
  containerfunc:{ //container dos buttons settings/notificações
    flexDirection:'row',
    alignSelf:'center',
    marginTop:20,
    bottom:10,
  },
    buttonMensage:{ //button notificações
    backgroundColor: '#b20000',
    position:'aboslute',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems:'center',
    justifyContent:'center',
    bottom:2,
    alignSelf:'center',
    marginEnd:10,
  },
  containerMensage:{ //container mensagem - individual
    backgroundColor:'#e5e5e5',
    borderRadius:10,
    height:150,
    marginLeft:15,
    marginTop:20,
    marginRight:15,            
    bottom:15,
    shadowColor: 'rgba(171, 180, 189, 0.35)',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 5,
    shadowRadius: 10,
    
  },
  titleMensage:{ //titulo mensagem
    marginTop:26,
    marginLeft:50,
    color:'white',
    fontSize:15,
    fontWeight:'bold',
    position:'absolute'
  },
  iconMensage:{ //icone chat
    width:30,
    height:30,
    position:'absolute',
    marginLeft:20,
    bottom:100
  },
  remententeMensage:{ //nome do rementente
    fontFamily: 'HelveticaNeue',
    fontSize:20,
    fontWeight:'310',
    marginTop:73,
    marginLeft:15
  },
  mensage:{ //mensagem em si
    fontFamily: 'HelveticaNeue',
    fontWeight:'200',
    marginLeft:10,
    marginTop:99,
    position:'absolute'
  },
  hoursMensage:{ //horario de envio
    position: 'absolute',
    right: 30,
    color:'gray',
    fontSize:20,
    fontWeight:'300',
    position:'absolute'
  }  
});
