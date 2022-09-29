import { Text, View, Image, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export function MateriasHome(props) {
  return (
    <View>
      <LinearGradient
        // Button Linear Gradient
        style={styles.circleIcon}
        colors={[
          "rgba(252, 185, 0, 1)",
          "rgba(218, 197, 141, 1)"
        ]}
      >
          <AntDesign name={props.nomeIcon} size={102} color="#7E7979" onPress={props.onPress}/>
      </LinearGradient>

      <View style={styles.textAlign}>
        <Text style={styles.textDecoration}>{props.textContent}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  circleIcon: {
    width: 170,
    height: 170,
    borderRadius: 170 / 2,
    margin: 20,
    //backgroundColor: '#FF9800',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textAlign: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textDecoration: {
    fontSize: 20,
    color: "#fff"
  }
})