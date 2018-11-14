import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { estilo } from "../produtos/produtos.css";
import { SearchBar } from "react-native-elements";

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
        <SearchBar
          clearIcon={{ color: "white" }}
          searchIcon={false} // You could have passed `null` too
          // onChangeText={someMethod}
          // onClear={someMethod}
          placeholder="Pesquisa..."
        />
        <View style={cardProdutos}>
          <View style={rodapeCardProdutos}>
            <Image style={imagem} source={require("../../../imgs/can.png")} />
            <Text style={tituloCardProdutos}>057 - Cajuína 500 ml</Text>
          </View>
          <Text style={informacaoProdutos}>R$ 2,26 </Text>
          <Text style={statusProdutos}>500 ml</Text>
        </View>

        <View style={cardProdutos}>
          <View style={rodapeCardProdutos}>
            <Image
              style={imagem}
              source={require("../../../imgs/chicken.png")}
            />
            <Text style={tituloCardProdutos}>385 - Frango</Text>
          </View>
          <Text style={informacaoProdutos}>R$ 5,47 </Text>
          <Text style={statusProdutos}>10 Kg</Text>
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
      </View>
    );
  }
}
