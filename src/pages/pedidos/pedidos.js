import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { estilo } from "../pedidos/pedidos.css";
import { Icon, SearchBar } from "react-native-elements";

export default class Pedidos extends Component {
  static navigationOptions = {
    title: "Pedidos"
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
          onPress={() => this.props.navigation.navigate("PedidosDetalhes")}
        >
          <View style={estilo.cardPedidos}>
            <Text style={estilo.tituloCard}>Edvaldo Viera da Silva</Text>
            <Text style={estilo.informacaoCentro}>R$ 450,26 </Text>
            <View style={estilo.rodapeCard}>
              <Text style={estilo.statusPedidos}>12/12/2012</Text>
              <View style={estilo.icon}>
                <Icon
                  name="info-outline"
                  size={30}
                  color="#32CD32"
                  onPress={() => this.props.navigation.navigate("Informacoes")}
                />
              </View>
              <Text style={estilo.statusPedidos}>RECEBIDO</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("PedidosDetalhes")}
        >
          <View style={estilo.cardPedidos}>
            <Text style={estilo.tituloCard}>Bruno Vitor Carvalho</Text>
            <Text style={estilo.informacaoCentro}>R$ 1.486,12 </Text>
            <View style={estilo.rodapeCard}>
              <Text style={estilo.statusPedidos}>28/10/2014</Text>
              <View style={estilo.icon}>
                <Icon
                  name="info-outline"
                  size={30}
                  color="#32CD32"
                  onPress={() =>
                    this.props.navigation.navigate("DetalhePedido")
                  }
                />
              </View>
              <Text style={estilo.statusPedidos}>RECEBIDO</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("PedidosDetalhes")}
        >
          <View style={estilo.cardPedidos}>
            <Text style={estilo.tituloCard}>Noah Vitor Corte Real</Text>
            <Text style={estilo.informacaoCentro}>R$ 47,12 </Text>
            <View style={estilo.rodapeCard}>
              <Text style={estilo.statusPedidos}>31/01/2015</Text>
              <View style={estilo.icon}>
                <Icon
                  name="info-outline"
                  size={30}
                  color="#32CD32"
                  onPress={() =>
                    this.props.navigation.navigate("DetalhePedido")
                  }
                />
              </View>
              <Text style={estilo.statusPedidos}>RECEBIDO</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("PedidosDetalhes")}
        >
          <View style={estilo.cardPedidos}>
            <Text style={estilo.tituloCard}>Otávio Rodrigo Gonçalves</Text>
            <Text style={estilo.informacaoCentro}>R$ 783,45 </Text>
            <View style={estilo.rodapeCard}>
              <Text style={estilo.statusPedidos}>01/05/2013</Text>
              <View style={estilo.icon}>
                <Icon
                  name="info-outline"
                  size={30}
                  color="#32CD32"
                  onPress={() =>
                    this.props.navigation.navigate("DetalhePedido")
                  }
                />
              </View>
              <Text style={estilo.statusPedidos}>RECEBIDO</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
