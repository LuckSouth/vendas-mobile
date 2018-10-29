import { createStackNavigator } from "react-navigation";

import Main from "./pages/main";
import Clientes from "./pages/clientes/clientes";
import Pedidos from "./pages/pedidos/pedidos";
import Pesquisa from "./pages/pesquisas/pesquisa";
import Produtos from "./pages/produtos/produtos";

export default createStackNavigator(
  {
    Main,
    Clientes,
    Pedidos,
    Pesquisa,
    Produtos
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
