import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

export default function Input(props) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={props.placeholder}
        value={props.input}
        onChangeText={props.onChangeText}
        style={styles.input}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "#D4D4D4",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 50,
    marginTop: 5,
  },
});
