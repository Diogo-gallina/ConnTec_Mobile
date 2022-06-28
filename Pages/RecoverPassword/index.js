import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image

} from "react-native";


export default function RecoverPassword({ navigation }) {

  return (
    <View style={styles.container}>

        <View>
            <Image
            style={{
                marginTop: "20%",
                height: 80,
                width: 80,
                alignSelf: "center",
            }}
            source={require("../../assets/logoConn.png")}
            />
        </View>

        <View style={styles.containerTitle}>  
            <Text style={styles.txtTitulo}>
                Seu administrador foi notificado!
            </Text>
        </View>  

        <View style={styles.containerTxt}>
            <Text style={styles.txt}>
                Somente o administrador pode redefinir sua senha. Para ajudá-lo, enviamos um email ao administrador solicitando uma redefinição de senha.
            </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //container principal
    flex: 1,
  },

  containerTitle:{
    alignItems:"center",
    marginTop:65
  },

  txtTitulo:{
    fontFamily: "HelveticaNeue",
    color: "#000",
    fontSize:30, 
    fontWeight:"bold"
  },

  containerTxt:{
    alignSelf:"center",
    alignItems:"center",
    marginTop:45,
    width:350
  },

  txt:{
    fontFamily: "HelveticaNeue",
    color: "gray",
    fontSize:19
  }

});
