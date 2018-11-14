import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "react-navigation";

import Icon from "react-native-vector-icons/MaterialIcons";

import { estilo } from "./incluir-pedido.css";

class IncluirPedido extends React.Component {
  render() {
    return (
      <View style={estilo.incluirPedido}>
        <View style={estilo.incluirPedidoCard}>
          <Text style={estilo.incluirPedidoInput}>Nº Pedido:</Text>
          <Text style={estilo.incluirPedidoText}>442663</Text>
        </View>

        <View style={estilo.incluirPedidoCard}>
          <Text style={estilo.incluirPedidoInput}>Data:</Text>
          <Text style={estilo.incluirPedidoText}>13/11/2018</Text>
        </View>

        <View style={estilo.incluirPedidoCard}>
          <Text style={estilo.incluirPedidoInput}>Cliente:</Text>
          <Text style={estilo.incluirPedidoText}>
            Anario Barroso de Menezes Filho
          </Text>
        </View>

        <View style={estilo.incluirPedidoCard}>
          <Text style={estilo.incluirPedidoInput}>Limite de Crédito:</Text>
          <Text style={estilo.incluirPedidoText}>R$ 1.000,00</Text>
        </View>

        <View style={estilo.incluirPedidoCard}>
          <Text style={estilo.incluirPedidoInput}>Saldo:</Text>
          <Text style={estilo.incluirPedidoText}>R$ 1.000,00</Text>
        </View>

        <View style={estilo.incluirPedidoCard}>
          <Text style={estilo.incluirPedidoInput}>Categoria:</Text>
          <Text style={estilo.incluirPedidoText}>1</Text>
        </View>

        <View style={estilo.incluirPedidoCard}>
          <Text style={estilo.incluirPedidoInput}>Quantidade Itens:</Text>
          <Text style={estilo.incluirPedidoText}>0</Text>
        </View>

        <View style={estilo.incluirPedidoCard}>
          <Text style={estilo.incluirPedidoInput}>Valor Total:</Text>
          <Text style={estilo.incluirPedidoText}>R$ 0,00</Text>
        </View>

        <View style={estilo.incluirPedidoCard}>
          <Text style={estilo.incluirPedidoInput}>Data Entrega:</Text>
          <Text style={estilo.incluirPedidoText}>14/11/2018</Text>
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
