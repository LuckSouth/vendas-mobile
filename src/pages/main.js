import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";

export default class Main extends Component {
  static navigationOptions = {
    title: "Vendas"
  };

  render() {
    return (
      <View style={styles.page}>
        <View style={styles.geral}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Product");
            }}
          >
            <View style={styles.block}>
              <Text style={styles.texto}>Clientes</Text>
              <Image
                style={styles.img}
                source={require("../../imgs/cliente.png")}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Pedidos");
            }}
          >
            <View style={styles.block}>
              <Text style={styles.texto}>Pedidos</Text>
              <Image
                style={styles.img}
                source={require("../../imgs/pedidos.png")}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.geral}>
          <TouchableOpacity>
            <View style={styles.block}>
              <Text style={styles.texto2}>Pesquisas</Text>
              <Image
                style={styles.img}
                source={require("../..//imgs/pesquisa.png")}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.block}>
              <Text style={styles.texto3}>Produtos</Text>
              <Image
                style={styles.img}
                source={require("../../imgs/produto.png")}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.geral}>
          <TouchableOpacity>
            <View style={styles.block}>
              <Text style={styles.texto2}>Sincronizar</Text>
              <Image
                style={styles.img}
                source={require("../../imgs/sincronizar.png")}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.block}>
              <Text style={styles.texto}>Tabelas</Text>
              <Image
                style={styles.img}
                source={require("../../imgs/tabela.png")}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: "#004f8b",
    height: 150,
    width: 170,
    borderRadius: 5,
    marginRight: 6,
    padding: 50,
    paddingTop: 10
  },
  page: {},
  geral: {
    marginLeft: 6,
    flexDirection: "row",
    paddingTop: 10,
    justifyContent: "space-between"
  },
  img: {
    height: 80,
    width: 80,
    marginTop: 5,
    paddingLeft: -4
  },
  texto: {
    fontSize: 24,
    height: 40,
    width: 170,
    marginLeft: -5,
    color: "#fff",
    zIndex: 1
  },
  texto2: {
    fontSize: 24,
    height: 40,
    width: 170,
    marginLeft: -21,
    color: "#fff",
    zIndex: 1
  },
  texto3: {
    fontSize: 24,
    height: 40,
    width: 170,
    marginLeft: -10,
    color: "#fff",
    zIndex: 1
  }
});
