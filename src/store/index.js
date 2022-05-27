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
        wallet:[],
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
        getUser: state => {
            return state.user;
        },
        getWallets: state =>{
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
        SET_CART: (state, cart) => {
            state.cart = cart;
        },
        SET_WALLET: (state, wallet) => {
            state.wallet = wallet;
        },
        RESET: state => {
            Object.assign(state, getDefaultState());
        }
    },
    actions: {
        login: ({ commit }, { token, user, wallet}) => {
            commit('SET_TOKEN', token);
            commit('SET_USER', user);
            commit('SET_WALLET', wallet);

            // set auth header
            // Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        },
        addCart: ({ commit }, { payload }) => {
            commit('SET_CART', payload);
        },
        logout: ({ commit }) => {
            commit('RESET', '');
        }
    }
});