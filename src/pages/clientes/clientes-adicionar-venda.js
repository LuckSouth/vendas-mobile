import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { estilo } from "./clientes-adicionar-venda.css";

export default class ClientesAdicionarVenda extends Component {
  static navigationOptions = {
    title: "Clientes"
  };

  render() {
    return (
      <View style={estilo.page}>
        <View style={estilo.geral}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Clientes");
            }}
          >
            <View style={estilo.block}>
              <Text style={estilo.texto}>Ovos</Text>
              <Image
                style={estilo.img}
                source={require("../../../imgs/egg-white.png")}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Pedidos");
            }}
          >
            <View style={estilo.block}>
              <Text style={estilo.texto}>Galinha</Text>
              <Image
                style={estilo.img}
                source={require("../../../imgs/chicken-white.png")}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={estilo.geral}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Pesquisa");
            }}
          >
            <View style={estilo.block}>
              <Text style={estilo.texto2}>Queijo</Text>
              <Image
                style={estilo.img}
                source={require("../../../imgs/cheese-white.png")}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Produtos");
            }}
          >
            <View style={estilo.block}>
              <Text style={estilo.texto3}>Cajuína</Text>
              <Image
                style={estilo.img}
                source={require("../../../imgs/can-white.png")}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
