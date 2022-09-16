import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { auth } from '../../config/firebase';

export default function SettingScreen ( {navigation} ) {

    const handleSignOut = () =>{
        auth
        .signOut()
        .then(()=>{
            navigation.replace('Login')
        })
        .catch(error => alert(error.message))


    }

    return (
      <View style={styles.container}>
        <Text>TelaConfiguracao</Text>
        <TouchableOpacity
            onPress={handleSignOut}
            style={styles.button}
        >
            <Text style={styles.buttonText}>Sair</Text>
        </TouchableOpacity>
      </View>
    )
  }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    }
})