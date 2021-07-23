import { createStore } from 'vuex'
import router from '../routers';

export default createStore({
    state: {
        user: null,
        auth: false,
        room: null,
        socket: null,
        modalShow: false,
        modalMessage: "",
        serverUrl: "",
        serverProxy: ""
    },
    getters: {
        getUser: state => state.user,
        getAuth: state => state.auth,
        getRoom: state => state.room,
        getSocket: state => state.socket,
        getModalShow: state => state.modalShow,
        getModalMessage: state => state.modalMessage,
        getServerUrl: state => state.serverUrl,
        getServerProxy: state => state.serverProxy
    },
    mutations: {
        USER: (state, payload) => {
            state.user = payload;
        },
        AUTH: (state, payload) => {
            state.auth = payload;
        },
        ROOM: (state, payload) => {
            state.room = payload;
        },
        SOCKET: (state, payload) => {
            state.socket = payload;
        },
        MODEL_SHOW: (state, payload) => {
            state.modalShow = payload;
        },
        MODEL_MESSAGE: (state, payload) => {
            state.modalMessage = payload;
        },
        SERVER_URL: (state, payload) => {
            state.serverUrl = payload;
        },
        SERVER_PROXY: (state, payload) => {
            state.serverProxy = payload;
        },
    },
    actions: {
        setUser: (context, payload) => {
            context.commit('USER', payload);
            localStorage.setItem('user', JSON.stringify(payload));
        },
        setAuth: (context, payload) => {
            context.commit('AUTH', payload);
            localStorage.setItem('auth', payload);
            if (!payload) {
                router.push({ name: 'Login' });
            }
        },
        setRoom: (context, payload) => {
            context.commit('ROOM', payload);
            localStorage.setItem('room', JSON.stringify(payload));
            if (!payload) {
                context.commit('AUTH', false);
            }
        },
        setSocket: (context, payload) => {
            context.commit('SOCKET', payload);
        },
        setShowModel: (context, payload) => {
            context.commit('MODEL_SHOW', payload);
        },
        setMessageModel: (context, payload) => {
            context.commit('MODEL_MESSAGE', payload);
        },
        setServerUrl: (context, payload) => {
            context.commit('SERVER_URL', payload);
        },
        setServerProxy: (context, payload) => {
            context.commit('SERVER_PROXY', payload);
        },
    }
});