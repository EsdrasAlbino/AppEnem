import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { auth } from '../config/firebase';

export default function TelaLogin() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = () =>{
        auth
        .createUserWithEmailAndPassword(email,password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email);
        })
        .catch(error => alert(error.message))
    }
  return (
    
    <KeyboardAvoidingView
    behavior='padding'
    style={styles.container}
    >
        <View style={styles.inputContainer}>
            <TextInput
             placeholder='Email'
             value={email}
             onChangeText={text => setEmail(text)}
             style={styles.input}
            />

            <TextInput
             placeholder='Password'
             value={password}
             onChangeText={text => setPassword(text)}
             style={styles.input}
             secureTextEntry
            />
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity
             onPress={() =>{}}
             style={styles.button}
            >
                <Text style={styles.buttonOutline}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={handleSignUp}
             style={[styles.button, styles.buttonOutline]}
            >
                <Text style={styles.buttonOutlineText}>Registro</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor:'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width:'60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782f9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782f9'
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText:{
    color: '#0782f9',
    fontWeight: '700',
    fontSize: 16,
  }
});
