import Vue from 'vue';
import Vuex from 'vuex';
// import Axios from 'axios';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const getDefaultState = () => {
    return {
        token: '',
        user: {},
        cart: [],
        wallet: [],
        loggedIn: false
    };
};

export default new Vuex.Store({
    strict: true,
    plugins: [createPersistedState()],
    state: getDefaultState(),
    getters: {
        isAuthenticated: state => {
            return state.token;
        },
        loggedIn: state => {
            return state.loggedIn;
        },
        getUser: state => {
            return state.user;
        },
        getWallets: state => {
            return state.wallet
        }
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token;
        },
        SET_USER: (state, user) => {
            state.user = user;
        },
        UPDATE_WALLET: (state, newWallet) => {
            state.wallet.push(newWallet);
        },
        SET_WALLET: (state, wallet) => {
            state.wallet = wallet;
        },
        SET_LOGGEDIN_STATUS: (state, loggedIn) => {
            state.loggedIn = loggedIn;
        },
        RESET: state => {
            Object.assign(state, getDefaultState());
        }
    },
    actions: {
        login: ({ commit }, { token, user, wallet, loggedIn }) => {
            commit('SET_TOKEN', token);
            commit('SET_USER', user);
            commit('SET_WALLET', wallet);
            commit('SET_LOGGEDIN_STATUS', loggedIn);

            // set auth header
            // Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        },
        updateWallet: ({ commit }, { newWallet }) => {
            commit('UPDATE_WALLET', newWallet);
        },
        logout: ({ commit }) => {
            commit('RESET', '');
        }
    }
});