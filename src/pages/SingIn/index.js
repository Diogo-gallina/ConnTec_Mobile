import React, {useState} from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    TextInput, 
    TouchableOpacity,
    SafeAreaView
} from 'react-native';


export default function SingIn({navigation}){

    const [email, setEmail] = useState(null);
    const [senha, setSenha] = useState(null);

    const SingIn = () => {
        navigation.reset({
            index: 0,
            routes: [{name: "AppRoutes"}]
        })
    }

    const SingUp = () => {
        navigation.reset({
            index: 0,
            routes: [{name: "SingUp"}]
        })
    }

    return(
        <SafeAreaView>
            <View style={styles.container}>

                <Image  
                    source={require('../../../assets/connTec-logo.jpg')} 
                    style={{width:400, height:250, marginTop: 55}}
                    resizeMode="contain"
                />
                

                <TextInput style={styles.txtInp}
                    placeholder='   Email'
                    onChangeText={text=>setEmail(text)}
                />
                <TextInput style={styles.txtInp}
                    placeholder='   Senha'
                    secureTextEntry={true}
                    onChangeText={text=>setSenha(text)}
                />
                
                <TouchableOpacity style={styles.btnLogin} onPress={() => SingIn()}>
                    <Text style={styles.txtLogin}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnEsqueciSenha}>
                    <Text style={styles.txtEsqueciSenha}>Esqueci minha senha</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnCreateAccount} onPress={() => SingUp()}>
                    <Text style={styles.txtCreateAccount}>Criar uma conta</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6F6',
        alignItems: 'center',
        padding:20
    },
    
    txtInp: {
        width:'100%',
        height: 40,
        backgroundColor: '#D3D3D3',
        borderRadius: 10,
        marginTop:20,
        fontSize:20
    },
    
    btnLogin:{
        width:'100%',
        height: 40,
        backgroundColor: '#B20000',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    
    txtLogin:{
        color: 'white',
        fontFamily: 'verdana',
        fontSize: 16
    },

    btnEsqueciSenha:{
        width:'100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },

    txtEsqueciSenha:{
        color: '#B20000',
        fontFamily: 'verdana',
        fontWeight: 'bold',
        fontSize: 16
    },

    btnCreateAccount:{
        width:'100%',
        height: 40,
        paddingLeft: 140,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100
    },

    txtCreateAccount:{
        color: '#B20000',
        fontFamily: 'verdana',
        fontWeight: 'bold',
        fontSize: 16
    },
    });
