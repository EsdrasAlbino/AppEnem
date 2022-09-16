import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import firebase from '../../config/firebase';

import {useNavigation} from '@react-navigation/native';
import {MyButton} from '../../Components/MyButton/MyButton';


export default function HomeScreen() {
  const navigation = useNavigation();
  const database = firebase.firestore()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Essa tela só pode ser vista por usuários autenticados
      </Text>
      <MyButton
        title="Ir para Configurações"
        onPress={() => navigation.navigate('Settings')}
      />
      <Text>
        by <Text style={styles.coffText}>Coffstack</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
  },
  title: {
    fontWeight: 'bold',

    fontSize: 20,
    textAlign: 'center',
  },
  coffText: {
    color: '#550AB1',
    fontWeight: 'bold',
  },
});