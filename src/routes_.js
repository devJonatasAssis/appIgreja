import React from "react";
import { SafeAreaView, ScrollView, Image, StyleSheet } from 'react-native'
import { createStackNavigator, createDrawerNavigator, DrawerItems } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import CapelaniaScreen from "./lib_frontend/components/Map";
import ChamadaScreen from "./screens/school";
import HomeScreen from "./screens/Home/HomeScreen";
import SecretaryScreen from "./screens/Secretary";
import MembroScreen from "./screens/Secretary/Membro";
import Login from "../src/screens/Login/LoginScreen";
import LoginScreen from "../src/screens/Login/LoginScreen";
import MyDados from './screens/MyDados';
import MyDizimos from './screens/MyDizimos';
import PedidoOracaoVisita from './screens/PedidoOracaoVisita';
import Directory from './screens/Directory';
import LittleWallet from './screens/LittleWallet';
import FormMembro from './screens/Secretary/Membro/FormMembro';
import Feed from './pages/Feed';
import Product from "./screens/Secretary/Product";
import Disciplina from "./screens/school/Disciplina";
import Turma from "./screens/school/Turma";
import Chamada from './screens/school/Chamada';

var tintColor = '#FFF'

const CustomDrawerComponent = (props) => {
  <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.logo}>
      <Image style={{ height: 120, width: 120 }} source={require('../assets/imgs/logo1.png')} />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
}

const MenuRoutes = {
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      tabBarLabel: null,
      tabBarColor: '#FFF'
    }
  },
  Feed: {
    screen: Feed,
    navigationOptions: {
      tabBarLabel: "Feed",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-paper" color={tintColor} size={24} />
      ),
      tabBarColor: '#1E90FF'
    }
  },

  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: "Início",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-person-add" color={tintColor} size={24} />
      ),
      tabBarColor: '#1E90FF',
    }
  },

  Capelania: {
    screen: CapelaniaScreen,
    navigationOptions: {
      tabBarLabel: "Capelania",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-locate" color={tintColor} size={24} />
      ),
      tabBarColor: '#1E90FF'
    }
  },

  secretary: {
    screen: SecretaryScreen,
    navigationOptions: {
      tabBarLabel: "Secretaría",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-clipboard" color={tintColor} size={24} />
      ),
      tabBarColor: '#1E90FF'
    }
  },

  treasury: {
    screen: CapelaniaScreen,
    navigationOptions: {
      tabBarLabel: "Tesouraria",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-cash" color={tintColor} size={24} />
      ),
      tabBarColor: '#1E90FF'
    }
  },

  chamada: {
    screen: ChamadaScreen,
    navigationOptions: {
      tabBarLabel: "Chamada",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-checkbox-outline" color={tintColor} size={24} />
      ),
      tabBarColor: '#1E90FF'
    }
  }
};

const MenuNavigator = createDrawerNavigator(MenuRoutes, {
  initialRouteName: 'Login',
}, {
  contentComponent: CustomDrawerComponent
});

const MainRoutes = {
  Login: {
    name: "Login",
    navigationOptions: {
      header: null
    },
    screen: MenuNavigator
  },
  Feed: {
    screen: Feed,
    navigationOptions: {
      headerTitle: "Teste",
      title: "Notícias"
    }
  },
  Home: {
    name: "Home",
    screen: HomeScreen
  },
  Membro: {
    screen: MembroScreen,
    navigationOptions: {
      title: "Membros"
    }
  },
  MyDados: {
    screen: MyDados,
    navigationOptions: {
      title: "Meus Dados"
    }
  },
  MyDizimos: {
    screen: MyDizimos,
    navigationOptions: {
      title: "Meus Lançamentos"
    }
  },
  PedidoOracaoVisita: {
    screen: PedidoOracaoVisita,
    navigationOptions: {
      title: "Meus Pedidos"
    }
  },
  Directory: {
    screen: Directory,
    navigationOptions: {
      title: "Diretoria"
    }
  },
  LittleWallet: {
    screen: LittleWallet,
    navigationOptions: {
      title: "Carteirinha"
    }
  },
  FormMembro: {
    screen: FormMembro,
    navigationOptions: {
      title: "Formulário de Membro"
    }
  },
  Produto: {
    screen: Product,
    navigationOptions: {
      title: "Cadastro de Produto"
    }
  },
  Disciplina: {
    screen: Disciplina,
    navigationOptions: {
      title: "Cadastro de Disciplina"
    }
  },
  Turma: {
    screen: Turma,
    navigationOptions: {
      title: "Cadastro de Turma"
    }
  },
  Chamada: {
    screen: Chamada,
    navigationOptions: {
      title: "Realizar Chamada"
    }
  }
};

const MainNavigator = createStackNavigator(MainRoutes);

export default MainNavigator;

const styles = StyleSheet.create({
  logo: {
    height: 150,
    backgroundColor: 'white'
  }
})
