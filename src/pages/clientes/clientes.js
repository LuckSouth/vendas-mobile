import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList, TextInput } from "react-native";
import { estilo } from "../../config/estilo";

export default class Product extends Component {
  static navigationOptions = {
    title: "Clientes"
  };

  render() {
    return (
      <View>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        />
      </View>
    );
  }
}
