import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { estilo } from "../../config/estilo";

export default class Pedidos extends Component {
  static navigationOptions = {
    title: "Pedidos"
  };

  render() {
    return (
      <View>
        <View style={estilo.cardPedidos}>
          <Text style={estilo.tituloCard}>Edvaldo Viera da Silva</Text>
          <Text style={estilo.informacaoCentro}>R$ 450,26 </Text>
          <View style={estilo.rodapeCard}>
            <Text style={estilo.statusPedidos}>12/12/2012</Text>
            <Text style={estilo.statusPedidos}>RECEBIDO</Text>
          </View>
        </View>
        <View style={estilo.cardPedidos}>
          <Text style={estilo.tituloCard}>Edvaldo Viera da Silva</Text>
          <Text style={estilo.informacaoCentro}>R$ 450,26 </Text>
          <View style={estilo.rodapeCard}>
            <Text style={estilo.statusPedidos}>12/12/2012</Text>
            <Text style={estilo.statusPedidos}>RECEBIDO</Text>
          </View>
        </View>
        <View style={estilo.cardPedidos}>
          <Text style={estilo.tituloCard}>Edvaldo Viera da Silva</Text>
          <Text style={estilo.informacaoCentro}>R$ 450,26 </Text>
          <View style={estilo.rodapeCard}>
            <Text style={estilo.statusPedidos}>12/12/2012</Text>
            <Text style={estilo.statusPedidos}>RECEBIDO</Text>
          </View>
        </View>
        <View style={estilo.cardPedidos}>
          <Text style={estilo.tituloCard}>Edvaldo Viera da Silva</Text>
          <Text style={estilo.informacaoCentro}>R$ 450,26 </Text>
          <View style={estilo.rodapeCard}>
            <Text style={estilo.statusPedidos}>12/12/2012</Text>
            <Text style={estilo.statusPedidos}>RECEBIDO</Text>
          </View>
        </View>
      </View>
    );
  }
}
