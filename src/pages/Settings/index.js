//importando React e componentes
import { StyleSheet, SafeAreaView, View, Image, TouchableHighlight,Text, ScrollView } from 'react-native';
import { Feather} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome5';


export  function Settings({navigation}){

    const Profile = () => {
        navigation.reset({
            index: 0,
            routes: [{name: "Profile"}]
        })
    }

    const sairApp = () => {
    navigation.reset({
    index:0,
    routes: [{name: "SingIn"}]

    })
    }

    return(
<ScrollView>
    <SafeAreaView style={{flex: 1, backgroundColor:"#e0e0e0"}}>
        <View style={{backgroundColor:'#e0e0e0'}}>

            <View style={styles.header}>
                <Image  
                source={require('../../../assets/newLogo.jpg')} 
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
            <View style={{flex: 5, padding: 10, backgroundColor:'#e0e0e0'}}>
      
    
 <View style={styles.viu}>
{/*Criando botão com icone*/}   
        <Icon.Button                  
          name="bell"
          size={45}
          color='black'
          backgroundColor="#f0f0f0"
          borderRadius={9}
        
      
          onPress={() => entrarNotificacao()}>
           
            <Text style={styles.texto}>Configurações de Notificações</Text>
          
        </Icon.Button>
        </View>


        
<View style={styles.viu}>
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

      
<View style={styles.viu}>
        <Icon.Button                  
          name="star"
          size={45}
          color='black'
          backgroundColor="#f0f0f0"
          borderRadius={7}
          onPress={() => entrarAvaliacao()}>
           
            <Text style={styles.texto}>Avalie o aplicativo</Text>
          
        </Icon.Button>
        </View>

<View style={styles.viu}>
        <Icon.Button                  
          name="question"
          size={45}
          color='black'
          backgroundColor="#f0f0f0"
          borderRadius={7}
          onPress={() => entrarVersaodoApp()}>
           
            <Text style={styles.texto}>Versão do App</Text>
          
        </Icon.Button>
        </View>
       
      <View style={styles.viu2}>
      <Icon.Button                  
          name="sign-out-alt"
          size={45}
          color='black'
          backgroundColor="#e0e0e0"
          borderRadius={60}
          left={10}
          
          onPress={() => sairApp()}>
           
            <Text style={styles.texto}>Sair</Text>
          
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

    texto:{
        fontFamily:'Arial',
        fontSize:25,
        fontWeight:'bold',
        alignContent:'center',
        alignItems:'center',
        textAlign:'center',
        padding:24,
        marginTop:25,
        marginVertical:20
      },
        
          viu:{
          margin:5,
      },
        
          viu2:{
          alignContent:'center',
          backgroundColor:'#e0e0e0',
          justifyContent: 'center',
          fontFamily:"verdana",
          width:230,
          marginVertical:70,
          alignSelf:'center'
      },
      
       CriarText: {
          color:'white',
          fontSize:18,
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily:"verdana",
           marginTop:-4
      }


});
