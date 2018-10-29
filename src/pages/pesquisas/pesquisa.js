import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button
} from "react-native";
import { estilo } from "../../config/estilo";

export default class Pesquisa extends Component {
  static navigationOptions = {
    title: "Pesquisas"
  };

  render() {
    return (
      <View style={estilo.pesquisa}>
        <View style={estilo.cardPesquisa}>
          <Text style={estilo.tituloPesquisa}>OVOS</Text>
        </View>
        <View style={estilo.cardPesquisa}>
          <Text style={estilo.tituloPesquisa}>FRANGO</Text>
        </View>
        <View style={estilo.cardPesquisa}>
          <Text style={estilo.tituloPesquisa}>QUEIJO</Text>
        </View>
        <View style={estilo.cardPesquisa}>
          <Text style={estilo.tituloPesquisa}>GALINHA</Text>
        </View>
      </View>
    );
  }
}
