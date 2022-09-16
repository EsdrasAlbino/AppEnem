import { Text, View, Image, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function MateriasHome (props) {
    return (
      <View style={styles.container}>
        <View>
          <MaterialIcons name="radio-button-unchecked" size={24} color="black" />
          <Text>{props.textContent}/</Text>
        </View>
        <View>
          <AntDesign name="book" size={24} color="black" />
          <Text>{props.numberContent}</Text>
        </View>
      </View>
    )
  
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#7C4CE6'
    },
})