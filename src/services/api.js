import axios from 'axios';
import AsyncStorage from "@react-native-community/async-storage";
// import { Alert, Platform } from 'react-native'
// import { toastr } from 'react-redux-toastr';

// const URL_API = 'http://10.172.218.171:8100/';
const URL_API = 'http://192.168.1.89:8100/';
// const URL_API = 'http://sistemaupigreja.dyndns.org:8199/';

/**
 * Realiza um post na url informada no constructor na rota
 * especificada e com os parâmetros especificados, o token do cookie
 * já é colocado automaticamente no header do post.
 */
async function post(rota, params) {
    const token = await AsyncStorage.getItem("token");
    if (rota !== 'login') {
        axios.defaults.headers.token = token;
    }
    console.log('vai postar - ', URL_API + rota, [...params]);
    const res = await axios.post(URL_API + rota, [...params]);
    return res.data;
}

/**
 * Realiza um get na url informada no constructor na rota
 * especificada e com os parâmetros especificados, o token do cookie
 * já é colocado automaticamente no header do get.
 */
async function get(rota, params) {
    const token = await AsyncStorage.getItem("token");
    axios.defaults.headers.token = token;
    const res = await axios.get(URL_API + rota, { params });
    return res.data;
}

export default async function (rota, ...params) {
    try {
    const codigoCliente = await AsyncStorage.getItem("codigoCliente");
    // const codigoCliente = 1;
    params.push(codigoCliente);

    const method = String(rota).startsWith('get') ? 'get' : 'post';
        if (method === 'get') {
            return await get(rota, ...params);
        }
    return await post(rota, params);
    } catch (ex) {
        if (ex.message === 'Network Error') {
            console.log('Erro na Api - ', ex, ' - Rota - ', rota);
            // Alert.alert('Erro de conexão!',
            //     `Não foi possível atingir o servidor (' + ${rota} + ') ${err}`);
        }
        throw ex;
    }
};





// import axios from 'axios'

// // crio uma instância do axios para obter a baseUrl
// const api = axios.create({
//     baseURL: 'http://10.0.2.2:8198'
// });

// export default api;

// import { Alert, Platform } from 'react-native'

// // const api = 'http://10.172.218.171:8100';
// const api = 'http://sistemaupigreja.dyndns.org:8199';

// function showError(err) {
//     Alert.alert('Ops! Ocorreu um Problema!', `Mensagem: ${err}`);
// }

// export { api, showError }
