import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

export function AssuntoIndividual(props) {
  const [check, setCheck] = useState(false);
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.flex}>
        {check ? (
          <MaterialIcons onPress={() => {setCheck(false)}}  name="check-box" style={styles.check}/>
        ) : (
          <MaterialIcons onPress={() => {setCheck(true)}}  name="check-box-outline-blank" style={styles.check}/>
        )}
        <Text style={styles.textContent}>{props.nomeConteudo}</Text>
      </View>
      <View style={[styles.flex, styles.bottonSpace]}>
        <MaterialIcons style={styles.iconContent} name="book" />
        <Text>20</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: 270,
    height: 100,
    borderRadius: 25,
    backgroundColor: "#D4D4D4",
    paddingLeft: 10,
    paddingTop: 10,
    margin: 7
  },
  flex: {
    flex: 1,
    flexDirection: "row",
  },
  bottonSpace:{
    paddingBottom: 30
  },
  check:{
    fontSize: 15,
    marginTop: 2
  },
  textContent:{
    fontWeight: 'bold',
  },
  iconContent:{
    fontSize: 30
  }
});
