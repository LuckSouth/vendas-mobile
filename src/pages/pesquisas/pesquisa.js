import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";
import { estilo } from "./pesquisa.css";

export default class Pesquisa extends Component {
  static navigationOptions = {
    title: "Pesquisas"
  };

  render() {
    return (
      <View style={estilo.page}>
        <View style={estilo.geral}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("SubPesquisa");
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
              this.props.navigation.navigate("SubPesquisa");
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
              this.props.navigation.navigate("SubPesquisa");
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
              this.props.navigation.navigate("SubPesquisa");
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
