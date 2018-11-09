import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button
} from "react-native";
import { estilo } from "./pesquisa.css";

export default class Pesquisa extends Component {
  static navigationOptions = {
    title: "Pesquisas"
  };

  render() {
    return (
      <View style={estilo.pesquisa}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("SubPesquisa");
          }}
        >
          <View style={estilo.cardPesquisa}>
            <Text style={estilo.tituloPesquisa}>OVOS</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Clientes");
          }}
        >
          <View style={estilo.cardPesquisa}>
            <Text style={estilo.tituloPesquisa}>FRANGO</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Clientes");
          }}
        >
          <View style={estilo.cardPesquisa}>
            <Text style={estilo.tituloPesquisa}>QUEIJO</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Clientes");
          }}
        >
          <View style={estilo.cardPesquisa}>
            <Text style={estilo.tituloPesquisa}>GALINHA</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
