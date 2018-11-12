import React, { Component } from "react";
import { Text, View, TouchableOpacity, ListView } from "react-native";
import { estilo } from "../pesquisas/sub-pesquisa-informacoes.css";
import { Icon } from "react-native-elements";

export default class SudPesquisaInformacoes extends Component {
  static navigationOptions = {
    title: "Informações"
  };

  render() {
    return (
      <View style={estilo.detalheCliente}>
        <View style={estilo.detalheClienteCard}>
          <Text style={estilo.detalheClienteInput}>Produto</Text>
          <Text style={estilo.detalheClienteText}>
            914 - ASA DE FRANGO CONGELADA
          </Text>
        </View>

        <View style={estilo.detalheClienteCard}>
          <Text style={estilo.detalheClienteInput}>Supermercado</Text>
          <Text style={estilo.detalheClienteText}>
            40 - CENTERBOX JOAO XVIII
          </Text>
        </View>

        <View style={estilo.detalheClienteCard}>
          <Text style={estilo.detalheClienteInput}>Observação</Text>
          <Text style={estilo.detalheClienteText}>Motorista Erick</Text>
        </View>
      </View>
    );
  }
}
