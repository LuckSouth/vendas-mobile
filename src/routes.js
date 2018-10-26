import { createStackNavigator } from "react-navigation";

import Main from "./pages/main";
import Product from "./pages/product";
import Pedidos from "./pages/pedidos";
import Pesquisa from "./pages/pesquisa";
// import Clientes from "./pages/product";

export default createStackNavigator(
  {
    Main,
    Product,
    Pedidos,
    Pesquisa
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
