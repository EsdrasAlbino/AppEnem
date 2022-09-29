import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { AssuntoIndividual } from "../../Components/AssuntoIndividual/AssuntoIndividual";

export function TelaPort(){
    return (
      <View style={styles.container}>
      <Text style={styles.textTop}>Português</Text>
      <ScrollView>
        <AssuntoIndividual nomeConteudo="Interpretação de Texto"/>
        <AssuntoIndividual nomeConteudo="Gêneros Textuais"/>
        <AssuntoIndividual nomeConteudo="Variação Linguística"/>
        <AssuntoIndividual nomeConteudo="Análise Linguística"/>
        <AssuntoIndividual nomeConteudo="Semântica"/>
        <AssuntoIndividual nomeConteudo="Funções da Lingua"/>
        <AssuntoIndividual nomeConteudo="Redação"/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7C4CE6",
    paddingTop: Platform.OS === "ios" ? 0 : 50,
  },
  textTop: {
    textAlign: "center",
    color: "#fff",
    fontSize: 40,
    padding: 40,
    fontWeight: "bold",
  },
});
