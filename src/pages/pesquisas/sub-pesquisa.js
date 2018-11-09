import React, { Component } from "react";

import { Text, View } from "react-native";
import estilo from "../clientes/clientes.css";
import { Icon } from "react-native-elements";

export default class SubPesquisa extends Component {
  static navigationOptions = {
    title: "Sub"
  };

  render() {
    return (
      <View>
        <Text>Página de Sub Peqsuisa!</Text>
      </View>
    );
  }
}
