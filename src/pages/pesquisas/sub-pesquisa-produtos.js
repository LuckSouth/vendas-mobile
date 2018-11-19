import React, { Component } from "react";
import { Text, View, TouchableOpacity, ListView } from "react-native";
import { estilo } from "../pesquisas/sub-pesquisa-produtos.css";
import { SearchBar } from "react-native-elements";

export default class SubPesquisaInformacoes extends Component {
  static navigationOptions = {
    title: "Pesquisas"
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
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("SubPesquisaInformacoes");
          }}
        >
          <View style={estilo.cardClientes}>
            <Text style={estilo.infoCard}>
              A22 - Frango Congelado 1.7 Encaixado
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("SubPesquisaInformacoes");
          }}
        >
          <View style={estilo.cardClientes}>
            <Text style={estilo.infoCard}>
              A22 - Frango Congelado 1.7 Encaixado
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("SubPesquisaInformacoes");
          }}
        >
          <View style={estilo.cardClientes}>
            <Text style={estilo.infoCard}>
              A22 - Frango Congelado 1.7 Encaixado
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("SubPesquisaInformacoes");
          }}
        >
          <View style={estilo.cardClientes}>
            <Text style={estilo.infoCard}>
              A22 - Frango Congelado 1.7 Encaixado
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("SubPesquisaInformacoes");
          }}
        >
          <View style={estilo.cardClientes}>
            <Text style={estilo.infoCard}>
              A22 - Frango Congelado 1.7 Encaixado
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
