import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { estilo } from "../../config/estilo";

export default class Product extends Component {
  static navigationOptions = {
    title: "Clientes"
  };

  render() {
    return (
      <View>
        <View style={estilo.cardClientes}>
          <Text style={estilo.tituloCard}>VANDOCELIO SILVA</Text>
          <View style={estilo.rodapeCard}>
            <Text style={estilo.statusClientes}>000.000.000-00</Text>
            <Text style={estilo.statusClientes}>A010</Text>
          </View>
        </View>

        <View style={estilo.cardClientes}>
          <Text style={estilo.tituloCard}>VANDOCELIO SILVA</Text>
          <View style={estilo.rodapeCard}>
            <Text style={estilo.statusClientes}>000.000.000-00</Text>
            <Text style={estilo.statusClientes}>A010</Text>
          </View>
        </View>

        <View style={estilo.cardClientes}>
          <Text style={estilo.tituloCard}>VANDOCELIO SILVA</Text>
          <View style={estilo.rodapeCard}>
            <Text style={estilo.statusClientes}>000.000.000-00</Text>
            <Text style={estilo.statusClientes}>A010</Text>
          </View>
        </View>

        <View style={estilo.cardClientes}>
          <Text style={estilo.tituloCard}>VANDOCELIO SILVA</Text>
          <View style={estilo.rodapeCard}>
            <Text style={estilo.statusClientes}>000.000.000-00</Text>
            <Text style={estilo.statusClientes}>A010</Text>
          </View>
        </View>
      </View>
    );
  }
}
