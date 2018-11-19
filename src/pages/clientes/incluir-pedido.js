import React from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { createBottomTabNavigator } from "react-navigation";

import Icon from "react-native-vector-icons/MaterialIcons";

import { estilo } from "./incluir-pedido.css";

class IncluirPedido extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={estilo.incluirPedido}>
          <View style={estilo.incluirPedidoCard}>
            <Text style={estilo.incluirPedidoInput}>Nº Pedido </Text>
            <Text style={estilo.incluirPedidoText}>442663</Text>
          </View>

          <View style={estilo.incluirPedidoCard}>
            <Text style={estilo.incluirPedidoInput}>Data </Text>
            <Text style={estilo.incluirPedidoText}>13/11/2018</Text>
          </View>

          <View style={estilo.incluirPedidoCard}>
            <Text style={estilo.incluirPedidoInput}>Cliente </Text>
            <Text style={estilo.incluirPedidoText}>
              Anario Barroso de Menezes Filho
            </Text>
          </View>

          <View style={estilo.incluirPedidoCard}>
            <Text style={estilo.incluirPedidoInput}>Limite de Crédito </Text>
            <Text style={estilo.incluirPedidoText}>R$ 1.000,00</Text>
          </View>

          <View style={estilo.incluirPedidoCard}>
            <Text style={estilo.incluirPedidoInput}>Saldo </Text>
            <Text style={estilo.incluirPedidoText}>R$ 1.000,00</Text>
          </View>

          <View style={estilo.incluirPedidoCard}>
            <Text style={estilo.incluirPedidoInput}>Categoria </Text>
            <Text style={estilo.incluirPedidoText}>1</Text>
          </View>

          <View style={estilo.incluirPedidoCard}>
            <Text style={estilo.incluirPedidoInput}>Quantidade Itens </Text>
            <Text style={estilo.incluirPedidoText}>0</Text>
          </View>

          <View style={estilo.incluirPedidoCard}>
            <Text style={estilo.incluirPedidoInput}>Valor Total </Text>
            <Text style={estilo.incluirPedidoText}>R$ 0,00</Text>
          </View>

          <View style={estilo.incluirPedidoCard}>
            <Text style={estilo.incluirPedidoInput}>Data Entrega </Text>
            <Text style={estilo.incluirPedidoText}>14/11/2018</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

class IncluirItens extends React.Component {
  render() {
    return (
      <View>
        <View style={estilo.cardProdutos}>
          <View style={estilo.rodapeCardProdutos}>
            <Image
              style={estilo.imagem}
              source={require("../../../imgs/egg-carton.png")}
            />
            <Text style={estilo.tituloCardProdutos}>
              011 - OVO SUPER EXTRA INDUSTRIAL C/30
            </Text>
          </View>
          <Text style={estilo.informacaoProdutos}>R$ 10,26 </Text>
          <Text style={estilo.statusProdutos}>0 BD</Text>
        </View>
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
          <Icon name="border-color" size={30} color={tintColor} />
        )
      }
    },
    IncluirItens: {
      screen: IncluirItens,
      navigationOptions: {
        tabBarLabel: "Itens",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="shopping-cart" size={30} color={tintColor} />
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
