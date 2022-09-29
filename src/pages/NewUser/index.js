import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../services/firebase";
import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Platform,
  Alert,
} from "react-native";

import Input from "../../Components/Input";
import Button from "../../Components/Button/Button";

export function NewUser({ navigation }) {
  const [nomeComplete, setNomeComplete] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  function SignUp() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User Register!");
        const user = userCredential.user;
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        Alert.alert(errorMessage);
      });

    navigation.navigate("Home", { idUser: user.uid });
  }

  const navigate = () => {
    navigation.navigate("Home");
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
   <Text style={styles.textTop}>Registro</Text>

      <Input
        placeholder="Nome Completo"
        value={nomeComplete}
        onChangeText={(text) => setNomeComplete(text)}
      />

      <Input
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <Input
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />

      {email === "" || password == "" ? (
        <Button textButton="Cadastrar" />
      ) : (
        <Button textButton="Cadastrar" functionButton={SignUp} />
      )}
      <Text style={styles.buttonOutlineText}>
        Já tem uma conta?
        <Text
          style={styles.linkRegister}
          onPress={() => navigation.navigate("Login")}
        >
          Clique Aqui
        </Text>
      </Text> 
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7C4CE6",
    paddingTop: Platform.OS === "ios" ? 0 : 50,
  },
  textTop: {
    textAlign: "center",
    color: "#fff",
    fontSize: 40,
    padding: 40,
    fontWeight: "bold",
  },
  contentAlert: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  warningAlert: {
    paddingLeft: 10,
    color: "#bdbdbd",
    fontSize: 16,
  },
  buttonOutlineText: {
    paddingTop: 10,
    color: "#D4D4D4",
    fontWeight: "700",
    fontSize: 16,
    textAlignVertical: "center",
    textAlign: "center",
  },
  linkRegister: {
    color: "#FCB900",
    fontWeight: "bold",
  },
});
