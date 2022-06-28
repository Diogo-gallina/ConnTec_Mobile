import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  BackHandler,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { Input } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as LocalAuthentication from "expo-local-authentication";
import { ScrollView } from "react-native-gesture-handler";
//importando componentes

export default function Login({ navigation }) {
  //Declarando variaveis

  const [errorEmail, setErrorEmail] = useState("");
  const [errorSenha, setErrorSenha] = useState("");
  const [hidePass, setHidePass] = useState(true);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome] = useState("");
  const [login, setLogin] = useState(null);

  //função para verificar se o login é verdadeiro
  async function verifyLogin() {
    let response = await AsyncStorage.getItem("userData");
    let json = await JSON.parse(response);
    if (json !== null) {
      setEmail(json.email);
      setSenha(json.senha);
      setLogin(true);
    }
  }

  //Função para chamar a biometria
  async function biometric() {
    let compatible = await LocalAuthentication.hasHardwareAsync();
    if (compatible) {
      let biometricRecords = await LocalAuthentication.isEnrolledAsync();
      if (!biometricRecords) {
        alert("Biometria não cadastrada. Logue com seu email e senha");
      } else {
        let result = await LocalAuthentication.authenticateAsync();
        if (result.success) {
          sendForm();
        }
      }
    }
  }

  //função para enviar o formulario para o controller
  async function sendForm() {
    let response = await fetch("https://conntec-mobile.herokuapp.com/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        senha: senha,
        nome: nome,
      }),
    });
    let json = await response.json();
    if (json === "error") {
      setErrorEmail("Email ou Senha errados!");
      setErrorSenha("Email ou Senha errados!");
      await AsyncStorage.clear();
    } else {
      await AsyncStorage.setItem("userData", JSON.stringify(json));
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    }
  }

  //Função para o botão de voltar
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Alerta!", "Deseja mesmo sair do app?", [
        {
          text: "Não",
          onPress: () => null,
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => {
            BackHandler.exitApp();
          },
        },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  //Fazendo as validações de campos.
  const validar = () => {
    let error = false;
    setErrorEmail(null);
    setErrorSenha(null);


    const re = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}etec.sp.gov.br$/i;

    if (!re.test(String(email).toLowerCase())) {
      setErrorEmail("Preencha seu E-mail corretamente!");
      error = true;
    }
    if (senha == null) {
      setErrorSenha("Senha não pode ser menor que 4 caracteres.");
      error = true;
    }
    if (email == null) {
      setErrorEmail("Email não pode ficar vázio.");
      error = true;
    }
    if (senha.length < 4) {
      setErrorSenha("Senha não pode ser menor que 4 caracteres.");
      error = true;
    }
    return !error;
  };
  //Chamada para verificação das validações e envio do formulario
  //Verificar se o login é verdadeiro e chamar a biometria
  useEffect(() => {
    verifyLogin();
  }, []);
  useEffect(() => {
    if (login === true) {
      biometric();
    }
  }, [login]);

  const salvar = () => {
    if (validar()) {
      biometric();
    } else if (validar()) {
      sendForm();
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: "10%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View>
          <Image
            style={{ marginTop: "10%", height: 200, width: 200 }}
            source={require("../../assets/logoConn.png")}
          ></Image>
        </View>

        <KeyboardAvoidingView
          style={styles.containerInput}
          keyboardVerticalOffset={30}
        >
          <ScrollView style={{ width: "100%" }}>
            <Input
              style={styles.input}
              placeholder="Digite seu e-mail"
              autoCompleteType="email"
              maxLength={100}
              autocorrect={false}
              onChangeText={(value) => setEmail(value)}
              errorMessage={errorEmail}
              keyboardType="email-address"
            />

            <Input
              style={styles.input}
              placeholder="Digite sua senha"
              autocorrect={false}
              maxLength={30}
              onChangeText={(value) => setSenha(value)}
              secureTextEntry={hidePass}
              errorMessage={errorSenha}
            />
            <TouchableOpacity
              style={styles.eye}
              onPress={() => setHidePass(!hidePass)}
            >
              {hidePass ? (
                <Ionicons name="eye" color="black" size={25} />
              ) : (
                <Ionicons name="eye-off" color="black" size={25} />
              )}
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>

        <TouchableOpacity onPress={() => navigation.navigate("RecoverPassword")}>
          <Text style={styles.txtForgot}>Esqueceu sua Senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.submitContainer}
          onPress={() => salvar()}
        >
          <View>
            <Text
              style={{
                color: "#fff",
                fontWeight: "600",
                fontSize: 20,
              }}
            >
              Login
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
          <Text
            style={{
              fontSize: 20,
              color: "#ABB4BD",
              textAlign: "center",
              marginTop: "8%",
            }}
          >
            Não tem uma conta? <Text style={styles.txtForgot}>Registre-se</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //container principal
    flex: 1,
  },
  txtForgot: {
    //esqueceu sua senha?
    color: "#FF1654",
    fontWeight: "500",
    marginTop: "10%",
    fontSize: 20,
  },
  submitContainer: {
    //button de login
    backgroundColor: "#B20000",
    fontSize: 10,
    borderRadius: 40,
    height: "8%",
    marginTop: "5%",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "rgba(255, 22, 84, 0.24)",
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 1,
    shadowRadius: 20,
    width: "90%",
  },
  input: {
    // e-mail, senha
    width: "95%",
    color: "#b20000",
    fontSize: 20,
    padding: "5%",
    borderBottomColor: "#D8D8D8",
    borderBottomWidth: 1,
  },
  containerInput: {
    alignItems: "center",
    width: "90%",
    marginTop: "5%",
  },
  eye: {
    position: "absolute",
    right: "3%",
    top: "62%",
  },
});
