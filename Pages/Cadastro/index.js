import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Alert,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  BackHandler,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { Input } from "react-native-elements";

export default function Cadastro({ navigation }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorName, setErrorName] = useState(null);
  const [errorSenha, setErrorSenha] = useState(null);
  const [errorConfirmSenha, setErrorConfirmSenha] = useState(null);
  const [hidePass, setHidePass] = useState(true);
  const [hidePass2, setHidePass2] = useState(true);

  async function sendForm() {
    let response = await fetch(
      "https://conntec-mobile.herokuapp.com/cadastro",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          name: name,
          senha: senha,
        }),
      }
    );
    let json = await response.json();
    if (json === "error") {
      setErrorEmail("Email já cadastrado!!");
    } else {
      Alert.alert(
        "Seu usuario foi cadastrado com sucesso!",
        "Logue com ele agora!",
        [
          {
            text: "Ir para o login",
            onPress: () => navigation.navigate("Onbording"),
          },
        ],
        { cancelable: false }
      );
    }
  }

  //Função para o botão de voltar
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Alerta!", "Deseja voltar para a tela de login?", [
        {
          text: "Não",
          onPress: () => null,
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => {
            navigation.navigate("Login");
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

  const validar = () => {
    let error = false;
    setErrorEmail(null);
    setErrorName(null);
    setErrorSenha(null);
    setErrorConfirmSenha(null);

    const re = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}etec.sp.gov.br$/i;
    const re2 = /^([a-z]+[,.]?[ ]?|[a-z]+['-]?)+$/i;

    if (!re.test(String(email).toLowerCase())) {
      setErrorEmail("Preencha seu E-mail corretamente.");
      error = true;
    }
    if (!re2.test(String(name).toLocaleLowerCase())) {
      setErrorName("Preencha o nome completo corretamente!");
      error = true;
    }
    if (senha.length < 4) {
      setErrorSenha("Senha não pode ser menor que 4 caracteres.");
      error = true;
    }
    if (email == null) {
      setErrorSenha("Preencha o E-mail.");
      error = true;
    }
    if (name == null) {
      setErrorName("Preencha o Nome.");
      error = true;
    }
    if (senha == null) {
      setErrorSenha("Preencha a senha.");
      error = true;
    }
    if (confirmSenha == null) {
      setErrorConfirmSenha("Confirme sua senha.");
      error = true;
    } else {
      if (senha !== confirmSenha) {
        setErrorConfirmSenha("As senhas não pode ser diferentes.");
        error = true;
      }
    }

    return !error;
  };

  const salvar = () => {
    if (validar()) {
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
            style={{ marginTop: "3%", height: 200, width: 200 }}
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
              maxLength={100}
              autocorrect={false}
              keyboardType="email-address"
              autoCompleteType="email"
              onChangeText={(value) => setEmail(value)}
              errorMessage={errorEmail}
            />

            <Input
              style={styles.input}
              placeholder="Digite seu nome completo"
              maxLength={30}
              autocorrect={false}
              onChangeText={(value) => setName(value)}
              errorMessage={errorName}
              autoCompleteType="name"
              keyboardType="name-phone-pad"
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

            <Input
              style={styles.input}
              placeholder="Confirme sua senha"
              autocorrect={false}
              maxLength={30}
              onChangeText={(value) => setConfirmSenha(value)}
              secureTextEntry={hidePass2}
              errorMessage={errorConfirmSenha}
            />
            <TouchableOpacity
              style={styles.eye2}
              onPress={() => setHidePass2(!hidePass2)}
            >
              {hidePass2 ? (
                <Ionicons name="eye" color="black" size={25} />
              ) : (
                <Ionicons name="eye-off" color="black" size={25} />
              )}
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>

        <TouchableOpacity
          style={styles.submitContainer}
          onPress={() => salvar()}
        >
          <View>
            <Text
              style={{
                color: "#fff",
                fontWeight: "600",
                fontSize: 19,
              }}
            >
              Registrar-se
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text
            style={{
              fontSize: 20,
              color: "#ABB4BD",
              textAlign: "center",
              marginTop: "5%",
            }}
          >
            Já tem uma conta? <Text style={styles.txtForgot}>Entre Agora!</Text>
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
    //texto do 'entrar agora'
    color: "#FF1654",
    fontSize: 20,
    fontWeight: "500",
  },
  submitContainer: {
    //button register
    backgroundColor: "#B20000",
    fontSize: 20,
    borderRadius: 50,
    height: "8%",
    marginTop: "4%",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "rgba(255, 22, 84, 0.24)",
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 1,
    shadowRadius: 20,
    width: "90%",
  },
  input: {
    width: "30%",
    color: "#b20000",
    fontSize: 20,
    padding: "1%",
    borderBottomColor: "#D8D8D8",
    borderBottomWidth: 1,
  },
  containerInput: {
    alignItems: "center",
    width: "90%",
    marginTop: "1%",
  },
  eye: {
    position: "absolute",
    right: "3%",
    top: "54%",
  },
  eye2: {
    position: "absolute",
    right: "3%",
    top: "80%",
  },
});
