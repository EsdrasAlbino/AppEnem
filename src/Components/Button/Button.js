import { 
    View, 
    Text, 
    TouchableOpacity,
    StyleSheet
} from "react-native";

import React from "react";
import { LinearGradient } from 'expo-linear-gradient';


export function Button(props, { navigation }) {
  return (
    <View style={styles.buttonContainer}>
      <LinearGradient
        // Button Linear Gradient
        style={styles.gradientButton}
        colors={[
          "rgba(252, 185, 0, 1)",
          "rgba(252, 185, 0, 0.41)",
          "rgba(252, 185, 0, 0)",
        ]}
      >
        <TouchableOpacity style={styles.button}
          onPress={props.functionButton}
        >
          <Text style={styles.buttonText}>{props.textButton}</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
    },
    button: {
      backgroundColor: 'rgba(52, 52, 52, 0)',
      width: '100%',
      height: 55,
      padding: 10,
      borderRadius: 20,
      alignItems: 'center',
    },
    gradientButton: {
      width: '100%',
      height: 75,
      borderRadius: 20,
    },
    buttonText: {
      color: '#D4D4D4',
      fontWeight: '700',
      fontSize: 16,
      textAlign: 'center',
      textAlignVertical:'center',
    },
  });
  
