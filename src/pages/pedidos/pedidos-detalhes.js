import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { estilo } from "./pedidos-detalhes.css";
import Icon from "react-native-vector-icons/MaterialIcons";
import { createBottomTabNavigator, TabNavigator } from "react-navigation";

class Informacoes extends React.Component {
  render() {
    return (
      <View style={estilo.detalhePedido}>
        <View style={estilo.detalhePedidoCard}>
          <Text style={estilo.detalhePedidoInput}>Código do Cliente </Text>
          <Text style={estilo.detalhePedidoText}>21350</Text>
        </View>

        <View style={estilo.detalhePedidoCard}>
          <Text style={estilo.detalhePedidoInput}>Código do Pedido </Text>
          <Text style={estilo.detalhePedidoText}>673408</Text>
        </View>

        <View style={estilo.detalhePedidoCard}>
          <Text style={estilo.detalhePedidoInput}>Pedido </Text>
          <Text style={estilo.detalhePedidoText}>27/04/2018</Text>
        </View>

        <View style={estilo.detalhePedidoCard}>
          <Text style={estilo.detalhePedidoInput}>Entrega </Text>
          <Text style={estilo.detalhePedidoText}>29/04/2018</Text>
        </View>

        <View style={estilo.detalhePedidoCard}>
          <Text style={estilo.detalhePedidoInput}>Vencimento </Text>
          <Text style={estilo.detalhePedidoText}>05/05/2018</Text>
        </View>

        <View style={estilo.detalhePedidoCard}>
          <Text style={estilo.detalhePedidoInput}>Valor Pedido </Text>
          <Text style={estilo.detalhePedidoText}>R$ 208,32</Text>
        </View>

        <View style={estilo.detalhePedidoCard}>
          <Text style={estilo.detalhePedidoInput}>Valor Total </Text>
          <Text style={estilo.detalhePedidoText}>R$ 208,32</Text>
        </View>
      </View>
    );
  }
}

class Itens extends React.Component {
  render() {
    return (
      <View>
        <View style={estilo.cardProdutos}>
          <View style={estilo.rodapeCardProdutos}>
            <Image
              style={estilo.imagem}
              source={require("../../../imgs/meat.png")}
            />
            <Text style={estilo.tituloCardProdutos}>
              A29 - FRANGO GRANDE CONGELADO 1.7 ENCAIXADO
            </Text>
          </View>
          <Text style={estilo.informacaoProdutos}>R$ 5,14 </Text>
          <Text style={estilo.statusProdutos}>100 kg</Text>
        </View>

        <View style={estilo.cardProdutos}>
          <View style={estilo.rodapeCardProdutos}>
            <Image
              style={estilo.imagem}
              source={require("../../../imgs/egg-carton.png")}
            />
            <Text style={estilo.tituloCardProdutos}>
              A22 - OVO MARROM GRANDE INDUSTRIAL 6
            </Text>
          </View>
          <Text style={estilo.informacaoProdutos}>R$ 8,15 </Text>
          <Text style={estilo.statusProdutos}>330 BD</Text>
        </View>

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

        <View style={estilo.cardProdutos}>
          <View style={estilo.rodapeCardProdutos}>
            <Image
              style={estilo.imagem}
              source={require("../../../imgs/egg-carton.png")}
            />
            <Text style={estilo.tituloCardProdutos}>
              A26 - OVO PEQUENO BRANCO INDUSTRAL T7
            </Text>
          </View>
          <Text style={estilo.informacaoProdutos}>R$ 5,52 </Text>
          <Text style={estilo.statusProdutos}>500 BD</Text>
        </View>
      </View>
    );
  }
}

export default createBottomTabNavigator(
  {
    Itens: {
      screen: Itens,
      navigationOptions: {
        tabBarLabel: "Itens",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="storage" size={30} color={tintColor} />
        )
      }
    },
    Informacoes: {
      screen: Informacoes,
      navigationOptions: {
        tabBarLabel: "Informações",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="info-outline" size={30} color={tintColor} />
        )
      }
    }
  },

  {
    order: ["Itens", "Informacoes"],
    tabBarOptions: {
      activeTintColor: "#004f8b",
      inactiveTintColor: "gray",
      style: {
        backgroundColor: "white"
      }
    }
  }
);
