import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { estilo } from "../pedidos/pedidos.css";
import { Icon } from "react-native-elements";

export default class Pedidos extends Component {
  static navigationOptions = {
    title: "Pedidos"
  };

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("PedidosInformacoes")}
        >
          <View style={estilo.cardPedidos}>
            <Text style={estilo.tituloCard}>Edvaldo Viera da Silva</Text>
            <Text style={estilo.informacaoCentro}>R$ 450,26 </Text>
            <View style={estilo.rodapeCard}>
              <Text style={estilo.statusPedidos}>12/12/2012</Text>
              <View style={estilo.icon}>
                <Icon
                  name="add"
                  size={30}
                  color="#32CD32"
                  onPress={() =>
                    this.props.navigation.navigate("ClientesAdicionarVenda")
                  }
                />
              </View>
              <Text style={estilo.statusPedidos}>RECEBIDO</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("PedidosInformacoes")}
        >
          <View style={estilo.cardPedidos}>
            <Text style={estilo.tituloCard}>Bruno Vitor Carvalho</Text>
            <Text style={estilo.informacaoCentro}>R$ 1.486,12 </Text>
            <View style={estilo.rodapeCard}>
              <Text style={estilo.statusPedidos}>28/10/2014</Text>
              <View style={estilo.icon}>
                <Icon
                  name="add"
                  size={30}
                  color="#32CD32"
                  onPress={() =>
                    this.props.navigation.navigate("ClientesAdicionarVenda")
                  }
                />
              </View>
              <Text style={estilo.statusPedidos}>RECEBIDO</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("PedidosInformacoes")}
        >
          <View style={estilo.cardPedidos}>
            <Text style={estilo.tituloCard}>Noah Vitor Corte Real</Text>
            <Text style={estilo.informacaoCentro}>R$ 47,12 </Text>
            <View style={estilo.rodapeCard}>
              <Text style={estilo.statusPedidos}>31/01/2015</Text>
              <View style={estilo.icon}>
                <Icon
                  name="add"
                  size={30}
                  color="#32CD32"
                  onPress={() =>
                    this.props.navigation.navigate("ClientesAdicionarVenda")
                  }
                />
              </View>
              <Text style={estilo.statusPedidos}>RECEBIDO</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("PedidosInformacoes")}
        >
          <View style={estilo.cardPedidos}>
            <Text style={estilo.tituloCard}>Otávio Rodrigo Gonçalves</Text>
            <Text style={estilo.informacaoCentro}>R$ 783,45 </Text>
            <View style={estilo.rodapeCard}>
              <Text style={estilo.statusPedidos}>01/05/2013</Text>
              <View style={estilo.icon}>
                <Icon
                  name="add"
                  size={30}
                  color="#32CD32"
                  onPress={() =>
                    this.props.navigation.navigate("ClientesAdicionarVenda")
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
