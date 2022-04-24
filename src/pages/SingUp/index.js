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


export default function SingUp({navigation}){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const Access = () => {
        navigation.reset({
            index: 0,
            routes: [{name: "SingIn"}]
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
                    placeholder='   Nome'
                    onChangeText={text=>setNome(text)}
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
                
                <TouchableOpacity style={styles.btnCadastro} onPress={()=>singUp()}>
                    <Text style={styles.txtCadastro}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnAccess} onPress={()=> Access()}>
                    <Text style={styles.txtAccess}> Já tenho uma conta </Text>
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
        marginTop:17,
        fontSize:20
    },
    
    btnCadastro:{
        width:'100%',
        height: 40,
        backgroundColor: '#B20000',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    
    txtCadastro:{
        color: 'white',
        fontFamily: 'verdana',
        fontSize: 18
    },

    btnAccess:{
        width:'100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },

    txtAccess:{
        color: '#B20000',
        fontFamily: 'verdana',
        fontWeight: 'bold',
        fontSize: 16
    }


    });

