import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { estilo } from "../produtos/produtos.css";

export default class Produtos extends Component {
  static navigationOptions = {
    title: "Produtos"
  };

  render() {
    const {
      cardProdutos,
      informacaoProdutos,
      tituloCardProdutos,
      rodapeCardProdutos,
      imagem,
      statusProdutos
    } = estilo;
    return (
      <View>
        <View style={cardProdutos}>
          <View style={rodapeCardProdutos}>
            <Image
              style={imagem}
              source={require("../../../imgs/galinha.png")}
            />
            <Text style={tituloCardProdutos}>
              011 - OVO SUPER EXTRA INDUSTRIAL C/30
            </Text>
          </View>
          <Text style={informacaoProdutos}>R$ 10,26 </Text>
          <Text style={statusProdutos}>0 BD</Text>
        </View>
        {/* <View style={estilo.cardProdutos}>
          <Image
            style={estilo.imagem}
            source={require("../../../imgs/galinha.png")}
          />
          <Text style={estilo.tituloCardProdutos}>
            011 - OVO SUPER EXTRA GRANDE VERMELHO C/30
          </Text>
          <Text style={estilo.informacaoCentro}>R$ 10,26 </Text>
          <View style={estilo.rodapeCardProdutos}>
            <Text style={estilo.statusPedidos}>0 BD</Text>
            <Text style={estilo.statusPedidos}>RECEBIDO</Text>
          </View>
        </View>
        <View style={estilo.cardProdutos}>
          <Image
            style={estilo.imagem}
            source={require("../../../imgs/galinha.png")}
          />
          <Text style={estilo.tituloCardProdutos}>
            011 - OVO SUPER EXTRA MEDIO BRANCO C/30
          </Text>
          <Text style={estilo.informacaoCentro}>R$ 10,26 </Text>
          <View style={estilo.rodapeCardProdutos}>
            <Text style={estilo.statusPedidos}>0 BD</Text>
            <Text style={estilo.statusPedidos}>RECEBIDO</Text>
          </View>
        </View>
        <View style={estilo.cardProdutos}>
          <Image
            style={estilo.imagem}
            source={require("../../../imgs/galinha.png")}
          />
          <Text style={estilo.tituloCardProdutos}>
            011 - OVO SUPER EXTRA PEQUENO BRANCO C/30
          </Text>
          <Text style={estilo.informacaoCentro}>R$ 10,26 </Text>
          <View style={estilo.rodapeCardProdutos}>
            <Text style={estilo.statusPedidos}>0 BD</Text>
            <Text style={estilo.statusPedidos}>RECEBIDO</Text>
          </View>
        </View>
        <View style={estilo.cardProdutos}>
          <Image
            style={estilo.imagem}
            source={require("../../../imgs/galinha.png")}
          />
          <Text style={estilo.tituloCardProdutos}>
            011 - OVO SUPER INDUSTRIAL GRANDE BRANCO C/30
          </Text>
          <Text style={estilo.informacaoCentro}>R$ 10,26 </Text>
          <View style={estilo.rodapeCardProdutos}>
            <Text style={estilo.statusPedidos}>0 BD</Text>
            <Text style={estilo.statusPedidos}>RECEBIDO</Text>
          </View>
        </View> */}
      </View>
    );
  }
}
