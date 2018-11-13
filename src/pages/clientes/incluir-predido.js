import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "react-navigation";

import Icon from "react-native-vector-icons/MaterialIcons";

import { estilo } from "./incluir-pedido.css";

class IncluirPedido extends React.Component {
  render() {
    return (
      <View style={estilo.detalhePedido}>
        <View style={estilo.detalhePedidoCard}>
          <Text style={estilo.detalhePedidoInput}>Nº Pedido:</Text>
          <Text style={estilo.detalhePedidoText}>442663</Text>
        </View>

        <View style={estilo.detalhePedidoCard}>
          <Text style={estilo.detalhePedidoInput}>Data:</Text>
          <Text style={estilo.detalhePedidoText}>13/11/2018</Text>
        </View>

        <View style={estilo.detalhePedidoCard}>
          <Text style={estilo.detalhePedidoInput}>Cliente:</Text>
          <Text style={estilo.detalhePedidoText}>
            Anario Barroso de Menezes Filho
          </Text>
        </View>

        <View style={estilo.detalhePedidoCard}>
          <Text style={estilo.detalhePedidoInput}>Limite de Crédito:</Text>
          <Text style={estilo.detalhePedidoText}>R$ 1.000,00</Text>
        </View>

        <View style={estilo.detalhePedidoCard}>
          <Text style={estilo.detalhePedidoInput}>Saldo:</Text>
          <Text style={estilo.detalhePedidoText}>R$ 1.000,00</Text>
        </View>

        <View style={estilo.detalhePedidoCard}>
          <Text style={estilo.detalhePedidoInput}>Categoria:</Text>
          <Text style={estilo.detalhePedidoText}>1</Text>
        </View>

        <View style={estilo.detalhePedidoCard}>
          <Text style={estilo.detalhePedidoInput}>Quantidade Itens:</Text>
          <Text style={estilo.detalhePedidoText}>0</Text>
        </View>

        <View style={estilo.detalhePedidoCard}>
          <Text style={estilo.detalhePedidoInput}>Valor Total:</Text>
          <Text style={estilo.detalhePedidoText}>R$ 0,00</Text>
        </View>

        <View style={estilo.detalhePedidoCard}>
          <Text style={estilo.detalhePedidoInput}>Data Entrega:</Text>
          <Text style={estilo.detalhePedidoText}>14/11/2018</Text>
        </View>

        <View style={estilo.iconPedido}>
          <Icon
            name="menu"
            size={30}
            color="#32CD32"
            onPress={() => alert("Icluir Pedido")}
          />
          <Text>Adicionar</Text>
        </View>
      </View>
    );
  }
}

class IncluirItens extends React.Component {
  render() {
    return (
      <View>
        <Text>Atualização para próxima versão</Text>
      </View>
    );
  }
}

export default createBottomTabNavigator(
  {
    IncluirPedido: {
      screen: IncluirPedido,

      navigationOptions: {
        tabBarLabel: "Pedido",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="border-color" size={30} color="#306B98" />
        )
      }
    },
    IncluirItens: {
      screen: IncluirItens,
      navigationOptions: {
        tabBarLabel: "Itens",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="shopping-cart" size={30} color="#306B98" />
        )
      }
    }
  },

  {
    order: ["IncluirPedido", "IncluirItens"],
    tabBarOptions: {
      activeTintColor: "#004f8b",
      inactiveTintColor: "gray",
      style: {
        backgroundColor: "white"
      }
    }
  }
);
