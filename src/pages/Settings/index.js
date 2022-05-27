import React, { useState } from "react";
import { View, Switch, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import Icon from '@expo/vector-icons/MaterialCommunityIcons';


export default function Settings({ navigation }) {
  
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  
  const Profile = () => {
    navigation.reset({
        index: 0,
        routes: [{name: "Profile"}]
    })
  }

  return (
  <View style={styles.container}>
  
      <View>
        <Image style={{marginTop:75,
                         height:50,
                         width:50,
                         alignSelf:'center'
                         }} source={require('../../../assets/logoConn.png')}></Image>
      
        <TouchableOpacity onPress={() => Profile()}>
          <Icon name='account-circle' size={43} color='#e5e5e5' style={{width:200, marginLeft: 300, marginTop: 50}}/> 
        </TouchableOpacity>
    
        <Text style={{
          fontSize: 50,
          color:'#B20000',
          fontFamily:'RobotoBold',paddingHorizontal: 20, marginTop: 25
          }}>Settings
        </Text>
       
      </View>  


      <View style={[styles.containerMain, {marginTop:30}]}>
        <Text style={{marginTop:20, marginLeft:10,fontFamily: 'HelveticaNeue',color:'#b20000'}}>MAIN</Text>
      
        <View style={[styles.containerFunc, {marginTop:10}]}>
          <Text style={styles.txtFunc}>Dark Mode</Text>
      
          <View style={[styles.iconsMain, {backgroundColor:'#323232'}]}>
            <MaterialCommunityIcons style={{alignSelf:'center', marginTop:2}}name="theme-light-dark" size={24} color="white" />
          </View>  
        
          <View>
            <Switch
              trackColor={{ false: "#767577", true: "#b20000" }}
              thumbColor={isEnabled ? "white" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={styles.interruptor}/>
          </View>
        </View>

        <View style={[styles.containerFunc, {marginTop:10}]}>
          <Text style={styles.txtFunc}>Notifications</Text>

          <View style={[styles.iconsMain, {backgroundColor:'#ffa370'}]}>
            <MaterialCommunityIcons style={{alignSelf:'center', marginTop:1}}name="bell" size={24} color="white" />
          </View>

          <View>
            <Switch
              trackColor={{ false: "#767577", true: "#b20000" }}
              thumbColor={isEnabled ? "white" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch2}
              value={isEnabled2}
              style={styles.interruptor}/>
          </View>
        </View>
      </View>


      <View style={[styles.containerMain, {marginTop:5}]}>
        <Text style={{marginTop:20, marginLeft:10,fontFamily: 'HelveticaNeue',color:'#b20000'}}>OTHERS</Text>
      
        <TouchableOpacity style={[styles.containerFunc, {marginTop:10}]}>
          <Text style={styles.txtFunc}>Politcs and Services</Text>
      
          <View style={[styles.iconsMain, {backgroundColor:'#88d4ff'}]}>
            <Ionicons style={{alignSelf:'center', marginTop:1, marginLeft:1}}name="document" size={24} color="white" />
        </View>  
      
        </TouchableOpacity>

        <TouchableOpacity style={[styles.containerFunc, {marginTop:10}]}>
          <Text style={styles.txtFunc}>Avaliable App</Text>

          <View style={[styles.iconsMain, {backgroundColor:'#ffdd11'}]}>
            <MaterialCommunityIcons style={{alignSelf:'center', marginTop:2}}name="star" size={24} color="white" />
          </View>
        </TouchableOpacity>
      
      </View>

  </View>                
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFF'
  },
  txtFunc:{
    fontSize:20,
    fontFamily: 'HelveticaNeue',
    color:'#52575D',
    marginLeft:45,
    marginTop:10
  },
  interruptor:{
    marginLeft:260,
    bottom:54
  },
  containerMain:{
    height:170,
    width:340,
    alignSelf:'center', 
    borderRadius:30 
  },
  containerFunc:{
    width:'90%',
    height:50,
    marginLeft:10,
    backgroundColor:'#f5f5f5',
    borderRadius:100
    },
  iconsMain:{
    height:30,
    width:30,
    borderRadius:100,
    bottom:23,
    marginLeft:6
  },
});
