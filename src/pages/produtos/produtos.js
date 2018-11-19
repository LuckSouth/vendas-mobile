import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { estilo } from "../produtos/produtos.css";
import { SearchBar } from "react-native-elements";

export default class Produtos extends Component {
  static navigationOptions = {
    title: "Produtos"
  };

  render() {
    return (
      <View>
        <SearchBar
          lightTheme
          clearIcon={{ color: "#2c3e50" }}
          searchIcon={false}
          // onChangeText={someMethod}
          // onClear={someMethod}
          placeholder="Pesquisa..."
        />
        <View style={estilo.cardProdutos}>
          <View style={estilo.rodapeCardProdutos}>
            <Image
              style={estilo.imagem}
              source={require("../../../imgs/can.png")}
            />
            <Text style={estilo.tituloCardProdutos}>
              057 - CAJUÍNA GRANDE LATA DE 500 ML
            </Text>
          </View>
          <Text style={estilo.informacaoProdutos}>R$ 2,26 </Text>
          <Text style={estilo.statusProdutos}>500 ml</Text>
        </View>

        <View style={estilo.cardProdutos}>
          <View style={estilo.rodapeCardProdutos}>
            <Image
              style={estilo.imagem}
              source={require("../../../imgs/chicken.png")}
            />
            <Text style={estilo.tituloCardProdutos}>
              385 - ASA DE FRANGO PEQUENA CONGELADA{" "}
            </Text>
          </View>
          <Text style={estilo.informacaoProdutos}>R$ 5,47 </Text>
          <Text style={estilo.statusProdutos}>10 Kg</Text>
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
      </View>
    );
  }
}
