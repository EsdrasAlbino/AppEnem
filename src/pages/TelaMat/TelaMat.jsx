import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { AssuntoIndividual } from "../../Components/AssuntoIndividual/AssuntoIndividual";

export function TelaMat() {
  return (
    <View style={styles.container}>
      <Text style={styles.textTop}>Matemática</Text>
      <ScrollView>
        <AssuntoIndividual nomeConteudo="Conjuntos Númericos"/>
        <AssuntoIndividual nomeConteudo="Grandezas"/>
        <AssuntoIndividual nomeConteudo="Razão e Proporção"/>
        <AssuntoIndividual nomeConteudo="Porcentagem e Juros"/>
        <AssuntoIndividual nomeConteudo="Analise de Gráficos"/>
        <AssuntoIndividual nomeConteudo="Funções"/>
        <AssuntoIndividual nomeConteudo="Logaritmo"/>
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
