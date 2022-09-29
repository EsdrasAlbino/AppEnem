import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firebase from '../../services/firebase';

import { useNavigation } from '@react-navigation/native';
import { Button } from '../../Components/Button/Button';
import { MateriasHome } from '../../Components/MateriasHome/MateriasHome';

export function HomeScreen({navigation}) {
  //const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.textTop}>Matérias</Text>
      <MateriasHome onPress={()=>{navigation.navigate("TelaPort")}} textContent="Português" nomeIcon="book" />
      <MateriasHome onPress={()=>{navigation.navigate("TelaMat")}} textContent="Matemática" nomeIcon="calculator" />
    </View>
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
});