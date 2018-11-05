import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "react-navigation";

class Informaoes extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white"
        }}
      >
        <View
          style={{
            backgroundColor: "#FFF",
            borderWidth: 1,
            flexDirection: "row",
            borderColor: "#DDD",
            borderRadius: 5,
            padding: 5,
            margin: 1
          }}
        >
          <Text
            style={{
              color: "#306B98",
              fontSize: 17
            }}
          >
            Cliente:
          </Text>
          <Text
            style={{
              fontSize: 17,
              marginLeft: 7
            }}
          >
            João Roberto da Cruz
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#FFF",
            borderWidth: 1,
            flexDirection: "row",
            borderColor: "#DDD",
            borderRadius: 5,
            padding: 5,
            margin: 1
          }}
        >
          <Text
            style={{
              color: "#306B98",
              fontSize: 17
            }}
          >
            Endereço:
          </Text>
          <Text
            style={{
              fontSize: 17,
              marginLeft: 7
            }}
          >
            Rua 548, N° 45 A
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#FFF",
            borderWidth: 1,
            flexDirection: "row",
            borderColor: "#DDD",
            borderRadius: 5,
            padding: 5,
            margin: 1
          }}
        >
          <Text
            style={{
              color: "#306B98",
              fontSize: 17
            }}
          >
            Telefone:
          </Text>
          <Text
            style={{
              fontSize: 17,
              marginLeft: 7
            }}
          >
            (85) 987581465
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#FFF",
            borderWidth: 1,
            flexDirection: "row",
            borderColor: "#DDD",
            borderRadius: 5,
            padding: 5,
            margin: 1
          }}
        >
          <Text
            style={{
              color: "#306B98",
              fontSize: 17
            }}
          >
            Grupo De Produto
          </Text>
          <Text
            style={{
              fontSize: 17,
              marginLeft: 7
            }}
          >
            01
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#FFF",
            borderWidth: 1,
            flexDirection: "row",
            borderColor: "#DDD",
            borderRadius: 5,
            padding: 5,
            margin: 1
          }}
        >
          <Text
            style={{
              color: "#306B98",
              fontSize: 17
            }}
          >
            Categoria:
          </Text>
          <Text
            style={{
              fontSize: 17,
              marginLeft: 7
            }}
          >
            03
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#FFF",
            borderWidth: 1,
            flexDirection: "row",
            borderColor: "#DDD",
            borderRadius: 5,
            padding: 5,
            margin: 1
          }}
        >
          <Text
            style={{
              color: "#306B98",
              fontSize: 17
            }}
          >
            Limite de crédito:
          </Text>
          <Text
            style={{
              fontSize: 17,
              marginLeft: 7
            }}
          >
            R$ 3.000,00
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#FFF",
            borderWidth: 1,
            flexDirection: "row",
            borderColor: "#DDD",
            borderRadius: 5,
            padding: 5,
            margin: 1
          }}
        >
          <Text
            style={{
              color: "#306B98",
              fontSize: 17
            }}
          >
            Saldo disponivel:
          </Text>
          <Text
            style={{
              fontSize: 17,
              marginLeft: 7
            }}
          >
            R$ 1.000,00
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#FFF",
            borderWidth: 1,
            flexDirection: "row",
            borderColor: "#DDD",
            borderRadius: 5,
            padding: 5,
            margin: 1
          }}
        >
          <Text
            style={{
              color: "#306B98",
              fontSize: 17
            }}
          >
            Prazo:
          </Text>
          <Text
            style={{
              fontSize: 17,
              marginLeft: 7
            }}
          >
            5 X
          </Text>
        </View>
      </View>
    );
  }
}

class Financeiro extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white"
        }}
      >
        <View
          style={{
            backgroundColor: "#FFF",
            borderWidth: 1,
            flexDirection: "row",
            borderColor: "#DDD",
            borderRadius: 5,
            padding: 5,
            margin: 1
          }}
        >
          <Text
            style={{
              color: "#306B98",
              fontSize: 17
            }}
          >
            Codigo:
          </Text>
          <Text
            style={{
              fontSize: 17,
              marginLeft: 7
            }}
          >
            15
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#FFF",
            borderWidth: 1,
            flexDirection: "row",
            borderColor: "#DDD",
            borderRadius: 5,
            padding: 5,
            margin: 1
          }}
        >
          <Text
            style={{
              color: "#306B98",
              fontSize: 17
            }}
          >
            Cliente:
          </Text>
          <Text
            style={{
              fontSize: 17,
              marginLeft: 7
            }}
          >
            João Roberto Da Cruz
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#FFF",
            borderWidth: 1,
            flexDirection: "row",
            borderColor: "#DDD",
            borderRadius: 5,
            padding: 5,
            margin: 1
          }}
        >
          <Text
            style={{
              color: "#306B98",
              fontSize: 17
            }}
          >
            Cód_Cliente:
          </Text>
          <Text
            style={{
              fontSize: 17,
              marginLeft: 7
            }}
          >
            85
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#FFF",
            borderWidth: 1,
            flexDirection: "row",
            borderColor: "#DDD",
            borderRadius: 5,
            padding: 5,
            margin: 1
          }}
        >
          <Text
            style={{
              color: "#306B98",
              fontSize: 17
            }}
          >
            Situação
          </Text>
          <Text
            style={{
              fontSize: 17,
              marginLeft: 7
            }}
          >
            01
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#FFF",
            borderWidth: 1,
            flexDirection: "row",
            borderColor: "#DDD",
            borderRadius: 5,
            padding: 5,
            margin: 1
          }}
        >
          <Text
            style={{
              color: "#306B98",
              fontSize: 17
            }}
          >
            Valor:
          </Text>
          <Text
            style={{
              fontSize: 17,
              marginLeft: 7
            }}
          >
            R$ 500,00
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#FFF",
            borderWidth: 1,
            flexDirection: "row",
            borderColor: "#DDD",
            borderRadius: 5,
            padding: 5,
            margin: 1
          }}
        >
          <Text
            style={{
              color: "#306B98",
              fontSize: 17
            }}
          >
            Data de pedido:
          </Text>
          <Text
            style={{
              fontSize: 17,
              marginLeft: 7
            }}
          >
            22/10/2018
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#FFF",
            borderWidth: 1,
            flexDirection: "row",
            borderColor: "#DDD",
            borderRadius: 5,
            padding: 5,
            margin: 1
          }}
        >
          <Text
            style={{
              color: "#306B98",
              fontSize: 17
            }}
          >
            Entrega
          </Text>
          <Text
            style={{
              fontSize: 17,
              marginLeft: 7
            }}
          >
            05/01/2019
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#FFF",
            borderWidth: 1,
            flexDirection: "row",
            borderColor: "#DDD",
            borderRadius: 5,
            padding: 5,
            margin: 1
          }}
        >
          <Text
            style={{
              color: "#306B98",
              fontSize: 17
            }}
          >
            Vencimento:
          </Text>
          <Text
            style={{
              fontSize: 17,
              marginLeft: 7
            }}
          >
            06/02/2019
          </Text>
        </View>
      </View>
    );
  }
}

export default createBottomTabNavigator({
  Informações: Informaoes,
  Financeiro: Financeiro
});
