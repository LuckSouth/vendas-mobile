import { createStackNavigator } from "react-navigation";

import Main from "./pages/main";
import Clientes from "./pages/clientes/clientes";
import Pedidos from "./pages/pedidos/pedidos";
import Pesquisa from "./pages/pesquisas/pesquisa";
import Produtos from "./pages/produtos/produtos";
import DetalheCliente from "./pages/clientes/detalhe-cliente";
import PedidosInformacoes from "./pages/pedidos/pedidos-informacoes";
import SubPesquisa from "./pages/pesquisas/sub-pesquisa";
import SubPesquisaProdutos from "./pages/pesquisas/sub-pesquisa-produtos";
import SubPesquisaInformacoes from "./pages/pesquisas/sub-pesquisa-informacoes";
import ClientesAdicionarVenda from "./pages/clientes/clientes-adicionar-venda";
import createBottomTabNavigator from "./pages/clientes/incluir-predido";

export default createStackNavigator(
  {
    Main,
    Clientes,
    Pedidos,
    Pesquisa,
    Produtos,
    DetalheCliente,
    PedidosInformacoes,
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
      headerTintColor: "#FFF"
    }
  }
);
