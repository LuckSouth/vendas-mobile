import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { estilo } from "../produtos/produtos.css";

export default class PedidosInformacoes extends Component {
  static navigationOptions = {
    title: "Detalhes"
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
            <Image style={imagem} source={require("../../../imgs/meat.png")} />
            <Text style={tituloCardProdutos}>
              A22 - Frango congelado 1.7 Encaixado
            </Text>
          </View>
          <Text style={informacaoProdutos}>R$ 5,14 </Text>
          <Text style={statusProdutos}>100 kg</Text>
        </View>

        <View style={cardProdutos}>
          <View style={rodapeCardProdutos}>
            <Image
              style={imagem}
              source={require("../../../imgs/egg-carton.png")}
            />
            <Text style={tituloCardProdutos}>A22 - Ovo industrial 6</Text>
          </View>
          <Text style={informacaoProdutos}>R$ 8,15 </Text>
          <Text style={statusProdutos}>330 BD</Text>
        </View>

        <View style={cardProdutos}>
          <View style={rodapeCardProdutos}>
            <Image
              style={imagem}
              source={require("../../../imgs/egg-carton.png")}
            />
            <Text style={tituloCardProdutos}>
              011 - OVO SUPER EXTRA INDUSTRIAL C/30
            </Text>
          </View>
          <Text style={informacaoProdutos}>R$ 10,26 </Text>
          <Text style={statusProdutos}>0 BD</Text>
        </View>

        <View style={cardProdutos}>
          <View style={rodapeCardProdutos}>
            <Image
              style={imagem}
              source={require("../../../imgs/egg-carton.png")}
            />
            <Text style={tituloCardProdutos}>A26 - Ovo branco grande 7</Text>
          </View>
          <Text style={informacaoProdutos}>R$ 5,52 </Text>
          <Text style={statusProdutos}>500 BD</Text>
        </View>
      </View>
    );
  }
}
