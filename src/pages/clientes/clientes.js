import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button
} from "react-native";
import { estilo } from "./clientes.css";
import { Icon } from "react-native-elements";

export default class Product extends Component {
  static navigationOptions = {
    title: "Clientes"
  };

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("DetalheCliente");
          }}
        >
          <View style={estilo.cardClientes}>
            <Text style={estilo.tituloCard}>VANDOCELIO SILVA</Text>
            <View style={estilo.rodapeCard}>
              <Text style={estilo.statusClientes}>000.000.000-00</Text>
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
              <Text style={estilo.statusClientes}>A010</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("DetalheCliente");
          }}
        >
          <View style={estilo.cardClientes}>
            <Text style={estilo.tituloCard}>VANDOCELIO SILVA</Text>
            <View style={estilo.rodapeCard}>
              <Text style={estilo.statusClientes}>000.000.000-00</Text>
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
              <Text style={estilo.statusClientes}>A010</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("DetalheCliente");
          }}
        >
          <View style={estilo.cardClientes}>
            <Text style={estilo.tituloCard}>VANDOCELIO SILVA</Text>
            <View style={estilo.rodapeCard}>
              <Text style={estilo.statusClientes}>000.000.000-00</Text>
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
              <Text style={estilo.statusClientes}>A010</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("DetalheCliente");
          }}
        >
          <View style={estilo.cardClientes}>
            <Text style={estilo.tituloCard}>VANDOCELIO SILVA</Text>
            <View style={estilo.rodapeCard}>
              <Text style={estilo.statusClientes}>000.000.000-00</Text>
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
              <Text style={estilo.statusClientes}>A010</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("DetalheCliente");
          }}
        >
          <View style={estilo.cardClientes}>
            <Text style={estilo.tituloCard}>VANDOCELIO SILVA</Text>
            <View style={estilo.rodapeCard}>
              <Text style={estilo.statusClientes}>000.000.000-00</Text>
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
              <Text style={estilo.statusClientes}>A010</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
