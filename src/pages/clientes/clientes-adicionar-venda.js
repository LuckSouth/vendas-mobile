import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
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
              <Text style={estilo.texto}>Clientes</Text>
              {/* <Image
                style={estilo.img}
                source={require("../../imgs/cliente.png")}
              /> */}
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Pedidos");
            }}
          >
            <View style={estilo.block}>
              <Text style={estilo.texto}>Pedidos</Text>
              {/* <Image
                style={estilo.img}
                source={require("../../imgs/pedidos.png")}
              /> */}
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
              <Text style={estilo.texto2}>Pesquisas</Text>
              {/* <Image
                style={estilo.img}
                source={require("../../imgs/pesquisa.png")}
              /> */}
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Produtos");
            }}
          >
            <View style={estilo.block}>
              <Text style={estilo.texto3}>Produtos</Text>
              {/* <Image
                style={estilo.img}
                source={require("../../imgs/produto.png")}
              /> */}
            </View>
          </TouchableOpacity>
        </View>

        <View style={estilo.geral}>
          <TouchableOpacity>
            <View style={estilo.block}>
              <Text style={estilo.texto2}>Sincronizar</Text>
              {/* <Image
                style={estilo.img}
                source={require("../../imgs/sincronizar.png")}
              /> */}
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={estilo.block}>
              <Text style={estilo.texto}>Tabelas</Text>
              {/* <Image
                style={estilo.img}
                source={require("../../imgs/tabela.png")}
              /> */}
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
