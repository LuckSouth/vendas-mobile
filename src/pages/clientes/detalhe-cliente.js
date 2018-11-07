import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import { estilo } from "./detalhe-cliente.css";

class Informaoes extends React.Component {
  render() {
    return (
      <View style={estilo.detalheCliente}>
        <View style={estilo.detalheClienteCard}>
          <Text style={estilo.detalheClienteInput}>Cliente:</Text>
          <Text style={estilo.detalheClienteText}>João Roberto da Cruz</Text>
        </View>

        <View style={estilo.detalheClienteCard}>
          <Text style={estilo.detalheClienteInput}>Endereço:</Text>
          <Text style={estilo.detalheClienteText}>Rua 548, N° 45 A</Text>
        </View>

        <View style={estilo.detalheClienteCard}>
          <Text style={estilo.detalheClienteInput}>Telefone:</Text>
          <Text style={estilo.detalheClienteText}>(85) 987581465</Text>
        </View>

        <View style={estilo.detalheClienteCard}>
          <Text style={estilo.detalheClienteInput}>Grupo De Produto</Text>
          <Text style={estilo.detalheClienteText}>01</Text>
        </View>

        <View style={estilo.detalheClienteCard}>
          <Text style={estilo.detalheClienteInput}>Categoria:</Text>
          <Text style={estilo.detalheClienteText}>03</Text>
        </View>

        <View style={estilo.detalheClienteCard}>
          <Text style={estilo.detalheClienteInput}>Limite de crédito:</Text>
          <Text style={estilo.detalheClienteText}>R$ 3.000,00</Text>
        </View>

        <View style={estilo.detalheClienteCard}>
          <Text style={estilo.detalheClienteInput}>Saldo disponivel:</Text>
          <Text style={estilo.detalheClienteText}>R$ 1.000,00</Text>
        </View>

        <View style={estilo.detalheClienteCard}>
          <Text style={estilo.detalheClienteInput}>Prazo:</Text>
          <Text style={estilo.detalheClienteText}>5 X</Text>
        </View>
      </View>
    );
  }
}

class Financeiro extends React.Component {
  render() {
    return (
      <View style={estilo.detalheCliente}>
        <View style={estilo.detalheClienteCard}>
          <Text style={estilo.detalheClienteInput}>Codigo:</Text>
          <Text style={estilo.detalheClienteText}>15</Text>
        </View>

        <View style={estilo.detalheClienteCard}>
          <Text style={estilo.detalheClienteInput}>Cliente:</Text>
          <Text style={estilo.detalheClienteText}>João Roberto Da Cruz</Text>
        </View>

        <View style={estilo.detalheClienteCard}>
          <Text style={estilo.detalheClienteInput}>Cód_Cliente:</Text>
          <Text style={estilo.detalheClienteText}>85</Text>
        </View>

        <View style={estilo.detalheClienteCard}>
          <Text style={estilo.detalheClienteInput}>Situação</Text>
          <Text style={estilo.detalheClienteText}>01</Text>
        </View>

        <View style={estilo.detalheClienteCard}>
          <Text style={estilo.detalheClienteInput}>Valor:</Text>
          <Text style={estilo.detalheClienteText}>R$ 500,00</Text>
        </View>

        <View style={estilo.detalheClienteCard}>
          <Text style={estilo.detalheClienteInput}>Data de pedido:</Text>
          <Text style={estilo.detalheClienteText}>22/10/2018</Text>
        </View>

        <View style={estilo.detalheClienteCard}>
          <Text style={estilo.detalheClienteInput}>Entrega</Text>
          <Text style={estilo.detalheClienteText}>05/01/2019</Text>
        </View>

        <View style={estilo.detalheClienteCard}>
          <Text style={estilo.detalheClienteInput}>Vencimento:</Text>
          <Text style={estilo.detalheClienteText}>06/02/2019</Text>
        </View>
      </View>
    );
  }
}

export default createBottomTabNavigator({
  Informações: Informaoes,
  Financeiro: Financeiro
});
