import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "react-navigation";

import Icon from "react-native-vector-icons/MaterialIcons";

import { estilo } from "./detalhe-pedido.css";

export default class DetalhePedido extends React.Component {
  render() {
    return (
      <View style={estilo.detalhePedido}>
        <View style={estilo.detalhePedidoCard}>
          <Text style={estilo.detalhePedidoInput}>Código do Cliente:</Text>
          <Text style={estilo.detalhePedidoText}>21350</Text>
        </View>

        <View style={estilo.detalhePedidoCard}>
          <Text style={estilo.detalhePedidoInput}>Código DO Pedido:</Text>
          <Text style={estilo.detalhePedidoText}>673408</Text>
        </View>

        <View style={estilo.detalhePedidoCard}>
          <Text style={estilo.detalhePedidoInput}>Pedido:</Text>
          <Text style={estilo.detalhePedidoText}>27/04/2018</Text>
        </View>

        <View style={estilo.detalhePedidoCard}>
          <Text style={estilo.detalhePedidoInput}>Entrega:</Text>
          <Text style={estilo.detalhePedidoText}>29/04/2018</Text>
        </View>

        <View style={estilo.detalhePedidoCard}>
          <Text style={estilo.detalhePedidoInput}>Vencimento:</Text>
          <Text style={estilo.detalhePedidoText}>05/05/2018</Text>
        </View>

        <View style={estilo.detalhePedidoCard}>
          <Text style={estilo.detalhePedidoInput}>Valor Pedido:</Text>
          <Text style={estilo.detalhePedidoText}>R$ 208,32</Text>
        </View>

        <View style={estilo.detalhePedidoCard}>
          <Text style={estilo.detalhePedidoInput}>Valor Total:</Text>
          <Text style={estilo.detalhePedidoText}>R$ 208,32</Text>
        </View>
      </View>
    );
  }
}
