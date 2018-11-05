import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "react-navigation";

class Informaoes extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#2980b9"
        }}
      >
        <Text>Primeira!</Text>
      </View>
    );
  }
}

class Financeiro extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "red"
        }}
      >
        <Text>Segunda!</Text>
      </View>
    );
  }
}

export default createBottomTabNavigator({
  Informações: Informaoes,
  Financeiro: Financeiro
});
