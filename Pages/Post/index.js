import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native'; //importando componentes
import Constants from 'expo-constants';

import { MaterialIcons, Fontisto, Ionicons } from '@expo/vector-icons' //importando icons
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

export default function Post({navigation}) {
  
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
  
  return (
    <View style={styles.container}>
      <View>
        <Image style={{  marginTop:'10%',
                         height:60,
                         width:60,
                         alignSelf:'center'
                         }} source={require('../../assets/logoConn.png')}></Image>
      </View>

      <View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{marginTop:'5%', marginLeft:'5%', marginRight:'5%'}}
      >
        <TouchableOpacity style={[styles.buttonsTab, {backgroundColor:'#ffac06'}]}  onPress={() => navigation.navigate('Home')}>
          <Icon name='home' color='white' size={32}/>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonsTab, {backgroundColor:'#ffa06c',}]} 
                          onPress={() => navigation.navigate('Profile')}>
          <Icon name='bell' color='white' size={32}/>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.buttonsTab, {backgroundColor:'#5facdb',}]}
                          onPress={() => navigation.navigate('Chat')}>
          <Icon name='chat' color='white' size={32}/>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonsTab, {backgroundColor:'#bb3'}]} 
                          onPress={() => navigation.navigate('Settings')}>
          <Ionicons name='settings' color='white' size={32}/>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonsTab, {backgroundColor:'#bb32fe',}]}
                          onPress={() => navigation.navigate('Crud')}>
          <Icon name='dots-horizontal' color='white' size={32}/>
        </TouchableOpacity>
      </ScrollView>



    </View>
</View>
  );
}

const styles = StyleSheet.create({
  container: { //container principal
    flex: 1,
  },
  buttonsTab:{ //buttons da tab-bar do header
    alignItems:'center',
    justifyContent:'center',
    height: 60,
    width: 60,
    borderRadius: 50,
    marginLeft:10,
  },
  imageUser:{ //icone do postador
    width: 30,
    height: 30,
    borderRadius: 100,
    overflow: 'hidden',
    marginTop: 13,
    marginLeft: 20,
  },
  txt:{ //predefinição de text
    color:'gray'
  },
  description:{ // container descrição do post
    marginLeft: 100, 
    marginRight: 40,
    bottom:55,
  },
  user:{ //nome do postador
    bottom: 57, 
    marginLeft: 100,
     fontWeight:'500',
  },
  hashtag:{ 
    bottom: 50,
    marginLeft: 100,  
  },
  post:{ //container do post
    height:'200%', 
    width:'60%', 
    marginLeft:'60%', 
    marginTop:'10%', 
    borderRadius:20,
  },
  containerTitlePost:{
    backgroundColor:'white', 
    width:260, 
    height:60, 
    marginLeft:85, 
    bottom:70, 
    borderRadius:100
  },
  containerLike:{
    bottom:520, 
    width:60, 
    height:120, 
    marginLeft:32
  },
  scrollView:{
  }



});
