import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  BackHandler,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Input } from "react-native-elements"; //importando componentes
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as LocalAuthentication from "expo-local-authentication";
import { ScrollView } from "react-native-gesture-handler";

export default function Login({ navigation }) {
  //Declarando variaveis

  const [errorEmail, setErrorEmail] = useState("");
  const [errorSenha, setErrorSenha] = useState("");
  const [hidePass, setHidePass] = useState(true);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
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
        } else {
          setEmail("");
          setSenha("");
        }
      }
    }
  }

  //função para enviar o formulario para o controller
  async function sendForm() {
    let response = await fetch("http://192.168.1.74:3000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        senha: senha,
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
        routes: [{ name: "AppRoutes" }],
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

    const re =
      /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;
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
    } else {
      sendForm();
    }
  };

  //Ir para o cadastro
  const goCadastro = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "SingUp" }],
    });
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View>
          <Image
            source={require("../../../assets/icon.png")}
            style={{ width: 200, height: 200, marginTop: 580 }}
            resizeMode="contain"
          />
        </View>

        <View
          style={{
            marginTop: 48,
            flexDirection: "row",
            justifyContent: "center",
          }}
        ></View>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={[styles.containerInput]}
          keyboardVerticalOffset={30}
        >
          <ScrollView style={{ width: "100%" }}>
            <Input
              style={styles.input}
              placeholder="Digite seu e-mail"
              autocorrect={false}
              onChangeText={(value) => setEmail(value)}
              errorMessage={errorEmail}
              keyboardType="email"
            />

            <Input
              style={styles.input}
              placeholder="Digite sua senha"
              autocorrect={false}
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

        <Text style={styles.txtForgot}>Esqueceu a senha?</Text>

        <TouchableOpacity
          style={styles.submitContainer}
          onPress={() => salvar()}
        >
          <Text
            style={{
              fontFamily: "Roboto",
              color: "#fff",
              fontWeight: "600",
              fontSize: 16,
            }}
          >
            Entrar
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            fontFamily: "Roboto",
            fontSize: 20,
            color: "#ABB4BD",
            textAlign: "center",
            marginTop: 24,
          }}
        >
          <TouchableOpacity style={{ flex: 1 }} onPress={() => goCadastro()}>
            <Text style={styles.txtForgot}>
              Não tem uma conta? Registre-se agora!
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  textR: {
    //predefinicao pronta para textos
    fontFamily: "Roboto",
    color: "black",
    marginTop: 7,
  },
  txtOr: {
    // texto 'or'
    color: "#ABB4BD",
    fontSize: 25,
    textAlign: "center",
    marginVertical: 20,
  },
  txtForgot: {
    //esqueceu sua senha?
    fontFamily: "Roboto",
    color: "#FF1654",
    fontSize: 16,
    fontWeight: "500",
    marginTop: 10,
  },
  submitContainer: {
    //button de login
    backgroundColor: "#B20000",
    fontSize: 16,
    borderRadius: 80,
    paddingVertical: 12,
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "rgba (255, 22, 84, 0.24)",
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 1,
    shadowRadius: 20,
    width: 350,
  },
  input: {
    // e-mail, senha
    width: 320,
    color: "#FF1654",
    fontSize: 20,
    padding: 10,
    fontFamily: "Roboto",
    borderBottomColor: "#D8D8D8",
    borderBottomWidth: 1,
  },
  containerInput: {
    alignItems: "center",
    width: "90%",
  },
  eye: {
    position: "absolute",
    right: "3%",
    top: "55%",
  },
});
