import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons'
import Input from '../../Components/Input/Index'
import Button from '../../Components/Button/Button'

//import firebase from '../../config/firebase';

export default function TelaLogin({navigation}) {
  //const navigation = useNavigation();
  //const database = firebase.firestore()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorLogin, setErrorLogin] = useState('')
  /*  
      useEffect (() => {
        const unsubscribe = auth.onAuthStateChaged(user => {
          if(user){
            navigation.navigate("Home")
          }
        })
  
        return unsubscribe
      },[]) 
  
      const handleSignUp = () =>{
          auth
          .createUserWithEmailAndPassword(email,password)
          .then(userCredentials => {
              const user = userCredentials.user;
              console.log('Register with: ', user.email);
          })
          .catch(error => alert(error.message))
      }
  
      const handleLogin = () => {
        auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log('Logged in with: ', user.email);
        })
  
      }
    */
   const navigate = () => {navigation.navigate('Home')}
  return (

    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.textTop}>Login</Text>

      <Input
        placeholder='Email'
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <Input
        placeholder='Password'
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />

      {errorLogin === true
        ?
        <View style={styles.contentAlert}>
          <MaterialCommunityIcons
            name='alert-circle'
            size={24}
            color="#dfdfdf"
          />
          <Text style={styles.warningAlert}> Email ou Senha Inválida</Text>
        </View>
        :
        <View />
      }

      {email === "" || password == ""
        ?
        <Button textButton='Login' />
        :
        <Button textButton='Login' functionButton={() => {}} />
      }
      <Text 
        style={styles.buttonOutlineText}>
        Ainda não é Registrado? 
        <Text
        style={styles.linkRegister}
        onPress={()=> navigation.navigate("Register")}
        >
        Faça agora
        </Text>
      </Text>
    </KeyboardAvoidingView >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7C4CE6',
    paddingTop: Platform.OS === "ios" ? 0 : 50,
  },
  textTop: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 40,
    padding: 40,
    fontWeight: 'bold'
  },
  contentAlert: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  warningAlert: {
    paddingLeft: 10,
    color: "#bdbdbd",
    fontSize: 16,
  },
  buttonOutlineText: {
    paddingTop: 10,
    color: '#D4D4D4',
    fontWeight: '700',
    fontSize: 16,
    textAlignVertical: 'center',
    textAlign: 'center'
  },
  linkRegister: {
    color: '#FCB900',
    fontWeight: 'bold'
  }
});
