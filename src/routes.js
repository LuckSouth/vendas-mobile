import { createStackNavigator } from "react-navigation";

import Main from "./pages/main";
import Clientes from "./pages/clientes/clientes";
import Pedidos from "./pages/pedidos/pedidos";
import PedidosDetalhes from "./pages/pedidos/pedidos-detalhes";
import Pesquisa from "./pages/pesquisas/pesquisa";
import Produtos from "./pages/produtos/produtos";
import DetalheCliente from "./pages/clientes/detalhe-cliente";
import SubPesquisa from "./pages/pesquisas/sub-pesquisa";
import SubPesquisaProdutos from "./pages/pesquisas/sub-pesquisa-produtos";
import SubPesquisaInformacoes from "./pages/pesquisas/sub-pesquisa-informacoes";
import ClientesAdicionarVenda from "./pages/clientes/clientes-adicionar-venda";
import createBottomTabNavigator from "./pages/clientes/incluir-pedido";

let titulo = "Informações";

// const { routeName } = navigation.state;
// if (1 == 1) {
//   titulo = navigation.state;
// }

/*

{
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Pedidos") {
          title = "sasasas",
        } else if (routeName === "Settings") {
          iconName = `ios-options${focused ? "" : "-outline"}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return (
          <Ionicons
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        );
      }
    })
  }

  */

export default createStackNavigator(
  {
    Main,
    Clientes,
    Pedidos,
    PedidosDetalhes,
    Pesquisa,
    Produtos,
    DetalheCliente,
    SubPesquisa,
    SubPesquisaProdutos,
    SubPesquisaInformacoes,
    ClientesAdicionarVenda,
    createBottomTabNavigator
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#004f8b"
      },
      title: titulo,
      headerTintColor: "#FFF"
    }
  }
);
