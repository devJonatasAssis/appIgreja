import React from 'react';
import { View, Image, SafeAreaView, ScrollView, Dimensions, StatusBar } from 'react-native'
import { createDrawerNavigator, DrawerItems, createStackNavigator, createSwitchNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons';
import CapelaniaScreen from "./lib_frontend/components/Map";
import ChamadaScreen from "./screens/school";
import HomeScreen from "./screens/Home/HomeScreen";
import SecretaryScreen from "./screens/Secretary";
import TesourariaScreen from './screens/Tesouraria';
import MembroScreen from "./screens/Secretary/Membro";
import CelulaScreen from './screens/Celula';
import Login from "../src/screens/Login/LoginScreen";
import LoginScreen from "../src/screens/Login/LoginScreen";
import MyDados from './screens/MyDados';
import MyDizimos from './screens/MyDizimos';
import PedidoOracaoVisita from './screens/PedidoOracaoVisita';
import Directory from './screens/Directory';
import LittleWallet from './screens/LittleWallet';
import FormMembro from './screens/Secretary/Membro/FormMembro';
import FormProduto from './screens/Secretary/Product/FormProduct';
import Feed from './screens/Feed';
import Product from "./screens/Secretary/Product";
import Disciplina from "./screens/school/Disciplina";
import Turma from "./screens/school/Turma";
import Chamada from './screens/school/Chamada';
import Carteirinha from './screens/LittleWallet/Carteirinha';
import Area from './screens/Celula/Area';
import FormArea from './screens/Celula/Area/FormArea';
import CelulaScreen2 from './screens/Celula/CelulaScreen';
import FormCelula from './screens/Celula/CelulaScreen/FormCelula';
import Distrito from './screens/Celula/Distrito'; 
import FormDistrito from './screens/Celula/Distrito/FormDistrito'; 
import Setor from './screens/Celula/Setor';
import FormSetor from './screens/Celula/Setor/FormSetor';
import Dizimo from './screens/Tesouraria/Dizimo';
import Oferta from './screens/Tesouraria/Oferta';
import ContasPagar from './screens/Tesouraria/ContasPagar';
import ContasReceber from './screens/Tesouraria/ContasReceber';
import FormDizimo from './screens/Tesouraria/Dizimo/FormDizimo';
import FormOferta from './screens/Tesouraria/Oferta/FormOferta';
import Evento from './screens/Secretary/Eventos';
import FormEvento from './screens/Secretary/Eventos/FormEvento';
import Curso from './screens/Secretary/Curso'
import FormCurso from './screens/Secretary/Curso/FormCurso';
import ConfigScreen from './screens/Config';

const { width } = Dimensions.get('window');

const MenuRoutes = {
    Feed: {
        screen: Feed,
        navigationOptions: {
            drawerLabel: 'Feed de Notícias',
            drawerIcon: ({ tintColor }) => (
                <Image style={{ width: 24, height: 24, tintColor: tintColor }} source={require('../assets/imgs/menu/newspaper.png')} />
            )
        }
    },
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            drawerLabel: 'Meus Dados',
            drawerIcon: ({ tintColor }) => (
                <Image style={{ width: 24, height: 24, tintColor: tintColor }} source={require('../assets/imgs/menu/home.png')} />
            )
        }
    },
    Secretary: {
        screen: SecretaryScreen,
        navigationOptions: {
            drawerLabel: 'Secretaría',
            drawerIcon: ({ tintColor }) => (
                <Image style={{ width: 24, height: 24, tintColor: tintColor }} source={require('../assets/imgs/menu/secretary.png')} />
            )
        }
    },
    treasury: {
        screen: TesourariaScreen,
        navigationOptions: {
            drawerLabel: 'Tesouraria',
            drawerIcon: ({ tintColor }) => (
                <Image style={{ width: 24, height: 24, tintColor: tintColor }} source={require('../assets/imgs/menu/money.png')} />
            )
        }
    },
    chamada: {
        screen: ChamadaScreen,
        navigationOptions: {
            drawerLabel: 'Chamada',
            drawerIcon: ({ tintColor }) => (
                <Image style={{ width: 24, height: 24, tintColor: tintColor }} source={require('../assets/imgs/menu/contract.png')} />
            )
        }
    },
    celula: {
        screen: CelulaScreen,
        navigationOptions: {
            drawerLabel: 'Célula',
            drawerIcon: ({tintColor}) => (
                <Image style={{ width: 24, height: 24, tintColor: tintColor }} source={require('../assets/imgs/menu/celula.png')} />
            )
        }
    },
    config: {
        screen: ConfigScreen,
        navigationOptions: {
            drawerLabel: 'Configurações',
            drawerIcon: ({tintColor}) => (
                <Image style={{ width: 24, height: 24, tintColor: tintColor }} source={require('../assets/imgs/menu/engineer.png')} />
            )
        }
    }
}

const CustomDrawerComponent = (props) => (
    <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
        <View style={{ alignItems: "center", justifyContent: 'center', height: 150, backgroundColor: 'white' }}>
            <Image source={require('../assets/imgs/logo1.png')} />
        </View>
        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
    </SafeAreaView>
)

const MenuNavigator = createDrawerNavigator(MenuRoutes, {
    initialRouteName: 'Home',
    contentComponent: CustomDrawerComponent,
    contentOptions: {
        activeTintColor: '#1E90FF'
    }
})

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
    FormProduto: {
        screen: FormProduto,
        navigationOptions: {
            title: "Formulário de Produto"
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
    },
    Carteirinha: {
        screen: Carteirinha,
        navigationOptions: {
            title: "Carteirinha"
        }
    },
    Area: {
        screen: Area,
        navigationOptions: {
            title: "Área"
        }
    },
    FormArea: {
        screen: FormArea,
        navigationOptions: {
            title: "Área"
        }
    },
    Celula: {
        screen: CelulaScreen2,
        navigationOptions: {
            title: "Célula"
        }
    },
    FormCelula: {
        screen: FormCelula,
        navigationOptions: {
            title: "Célula"
        }
    },
    Distrito: {
        screen: Distrito,
        navigationOptions: {
            title: "Distrito"
        }
    },
    FormDistrito: {
        screen: FormDistrito,
        navigationOptions: {
            title: "Distrito"
        }
    },
    Setor: {
        screen: Setor,
        navigationOptions: {
            title: "Setor"
        }
    },
    FormSetor: {
        screen: FormSetor,
        navigationOptions: {
            title: "Setor"
        }
    },
    Dizimo: {
        screen: Dizimo,
        navigationOptions: {
            title: "Dízimos"
        }
    },
    FormDizimo: {
        screen: FormDizimo,
        navigationOptions: {
            title: "Lançar Dízimos"
        }
    },
    Oferta: {
        screen: Oferta,
        navigationOptions: {
            title: "Ofertas"
        }
    },
    FormOferta: {
        screen: FormOferta,
        navigationOptions: {
            title: "Lançar Ofertas"
        }
    },
    Evento: {
        screen: Evento,
        navigationOptions: {
            title: "Eventos"
        }
    },
    FormEvento: {
        screen: FormEvento,
        navigationOptions: {
            title: "Lançar Eventos"
        }
    },
    Curso: {
        screen: Curso,
        navigationOptions: {
            title: "Cursos"
        }
    },
    FormCurso: {
        screen: FormCurso,
        navigationOptions: {
            title: "Lançar Cursos"
        }
    }
};

const MainNavigator = createStackNavigator(MainRoutes);

export default MainNavigator;