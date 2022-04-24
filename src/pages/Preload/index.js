import React, {useState} from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    TextInput, 
    TouchableOpacity 
} from 'react-native';


function Preload(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return(
        <View style={styles.container}>

            <Image
                source={require('../../../assets/connTec-logo.jpg')} 
                style={{width:400, height:200}} 
                resizeMode="contain"
            />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6F6',
        alignItems: 'center',
        justifyContent:'center',

    },
    
    });

export default Preload;