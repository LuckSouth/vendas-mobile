import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { estilo } from "../pesquisas/sub-pesquisa.css";
import { Icon } from "react-native-elements";

export default class SubPesquisa extends Component {
  static navigationOptions = {
    title: "Pesquisas"
  };

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("SubPesquisaProdutos");
          }}
        >
          <View style={estilo.cardClientes}>
            <View style={estilo.rodapeCard}>
              <View style={estilo.icon}>
                <Icon
                  name="check"
                  size={30}
                  color="#32CD32"
                  onPress={() =>
                    this.props.navigation.navigate("DetalheCliente")
                  }
                />
              </View>
            </View>
            <Text style={estilo.statusClientes}>18805</Text>
            <Text style={estilo.tituloCard}>FRANGOLANDIA</Text>
            <Text style={estilo.infoCard}>CE-040</Text>
            <Text style={estilo.infoCard}>Eusébio</Text>
          </View>
        </TouchableOpacity>

        <View style={estilo.cardClientes}>
          <View style={estilo.rodapeCard}>
            <View style={estilo.icon}>
              <Icon
                name="check"
                size={30}
                color="#32CD32"
                onPress={() => this.props.navigation.navigate("DetalheCliente")}
              />
            </View>
          </View>
          <Text style={estilo.statusClientes}>18805</Text>
          <Text style={estilo.tituloCard}>FRANGOLANDIA</Text>
          <Text style={estilo.infoCard}>CE-040</Text>
          <Text style={estilo.infoCard}>Eusébio</Text>
        </View>
        <View style={estilo.cardClientes}>
          <View style={estilo.rodapeCard}>
            <View style={estilo.icon}>
              <Icon
                name="check"
                size={30}
                color="#32CD32"
                onPress={() => this.props.navigation.navigate("DetalheCliente")}
              />
            </View>
          </View>
          <Text style={estilo.statusClientes}>18805</Text>
          <Text style={estilo.tituloCard}>FRANGOLANDIA</Text>
          <Text style={estilo.infoCard}>CE-040</Text>
          <Text style={estilo.infoCard}>Eusébio</Text>
        </View>
        <View style={estilo.cardClientes}>
          <View style={estilo.rodapeCard}>
            <View style={estilo.icon}>
              <Icon
                name="check"
                size={30}
                color="#32CD32"
                onPress={() => this.props.navigation.navigate("DetalheCliente")}
              />
            </View>
          </View>
          <Text style={estilo.statusClientes}>18805</Text>
          <Text style={estilo.tituloCard}>FRANGOLANDIA</Text>
          <Text style={estilo.infoCard}>CE-040</Text>
          <Text style={estilo.infoCard}>Eusébio</Text>
        </View>
        <View style={estilo.cardClientes}>
          <View style={estilo.rodapeCard}>
            <View style={estilo.icon}>
              <Icon
                name="check"
                size={30}
                color="#32CD32"
                onPress={() => this.props.navigation.navigate("DetalheCliente")}
              />
            </View>
          </View>
          <Text style={estilo.statusClientes}>18805</Text>
          <Text style={estilo.tituloCard}>FRANGOLANDIA</Text>
          <Text style={estilo.infoCard}>CE-040</Text>
          <Text style={estilo.infoCard}>Eusébio</Text>
        </View>
        <View style={estilo.cardClientes}>
          <View style={estilo.rodapeCard}>
            <View style={estilo.icon}>
              <Icon
                name="check"
                size={30}
                color="#32CD32"
                onPress={() => this.props.navigation.navigate("DetalheCliente")}
              />
            </View>
          </View>
          <Text style={estilo.statusClientes}>18805</Text>
          <Text style={estilo.tituloCard}>FRANGOLANDIA</Text>
          <Text style={estilo.infoCard}>CE-040</Text>
          <Text style={estilo.infoCard}>Eusébio</Text>
        </View>
        <View style={estilo.cardClientes}>
          <View style={estilo.rodapeCard}>
            <View style={estilo.icon}>
              <Icon
                name="check"
                size={30}
                color="#32CD32"
                onPress={() => this.props.navigation.navigate("DetalheCliente")}
              />
            </View>
          </View>
          <Text style={estilo.statusClientes}>18805</Text>
          <Text style={estilo.tituloCard}>FRANGOLANDIA</Text>
          <Text style={estilo.infoCard}>CE-040</Text>
          <Text style={estilo.infoCard}>Eusébio</Text>
        </View>
      </View>
    );
  }
}
