import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { estilo } from "../../config/estilo";
import { Icon } from "react-native-elements";

export default class Product extends Component {
  static navigationOptions = {
    title: "Clientes"
  };

  render() {
    return (
      <View>
        <View style={estilo.cardClientes}>
          <Text style={estilo.tituloCard}>VANDOCELIO SILVA</Text>
          <View style={estilo.rodapeCard}>
            <Text style={estilo.statusClientes}>000.000.000-00</Text>
            <Icon
              style={estilo.iconBla}
              raised
              name="heartbeat"
              type="font-awesome"
              color="red"
              onPress={() =>
                this.props.navigation.navigate("createBottomTabNavigator")
              }
            />

            <Text style={estilo.statusClientes}>A010</Text>
          </View>
        </View>

        <View style={estilo.cardClientes}>
          <Text style={estilo.tituloCard}>VANDOCELIO SILVA</Text>
          <View style={estilo.rodapeCard}>
            <Text style={estilo.statusClientes}>000.000.000-00</Text>
            <Icon
              raised
              name="heartbeat"
              type="font-awesome"
              color="red"
              onPress={() =>
                this.props.navigation.navigate("createBottomTabNavigator")
              }
            />
            <Text style={estilo.statusClientes}>A010</Text>
          </View>
        </View>

        <View style={estilo.cardClientes}>
          <Text style={estilo.tituloCard}>VANDOCELIO SILVA</Text>
          <View style={estilo.rodapeCard}>
            <Text style={estilo.statusClientes}>000.000.000-00</Text>
            <Icon
              raised
              name="heartbeat"
              type="font-awesome"
              color="red"
              onPress={() =>
                this.props.navigation.navigate("createBottomTabNavigator")
              }
            />
            <Text style={estilo.statusClientes}>A010</Text>
          </View>
        </View>

        <View style={estilo.cardClientes}>
          <Text style={estilo.tituloCard}>VANDOCELIO SILVA</Text>
          <View style={estilo.rodapeCard}>
            <Text style={estilo.statusClientes}>000.000.000-00</Text>
            <Icon
              raised
              name="heartbeat"
              type="font-awesome"
              color="red"
              onPress={() =>
                this.props.navigation.navigate("createBottomTabNavigator")
              }
            />
            <Text style={estilo.statusClientes}>A010</Text>
          </View>
        </View>
      </View>
    );
  }
}
