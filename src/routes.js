import { createStackNavigator } from "react-navigation";

import Main from "./pages/main";
import Clientes from "./pages/clientes/clientes";
import Pedidos from "./pages/pedidos/pedidos";
import Pesquisa from "./pages/pesquisas/pesquisa";
import Produtos from "./pages/produtos/produtos";
import createBottomTabNavigator from "./pages/clientes/detalhe-cliente";
import PedidosInformacoes from "./pages/pedidos/pedidos-informacoes";
import SubPesquisa from "./pages/pesquisas/sub-pesquisa";

export default createStackNavigator(
  {
    Main,
    Clientes,
    Pedidos,
    Pesquisa,
    Produtos,
    createBottomTabNavigator,
    PedidosInformacoes,
    SubPesquisa
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#004f8b"
      },
      headerTintColor: "#FFF"
    }
  }
);
