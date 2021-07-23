import { createApp } from 'vue'
import axios from 'axios';

import App from './App.vue';
import router from './routers';
import store from './stores';

store.dispatch('setSocket', null);

if (process.env.NODE_ENV === "development") {
    store.dispatch('setServerProxy', process.env.VUE_APP_DEV_PROXY);
    store.dispatch('setServerUrl', process.env.VUE_APP_DEV_URL);
} else {
    store.dispatch('setServerProxy', process.env.VUE_APP_PROD_PROXY);
    store.dispatch('setServerUrl', process.env.VUE_APP_PROD_URL);
}

if (localStorage.user && localStorage.auth) {
    axios.defaults.headers.common['Authorization'] = (JSON.parse(localStorage.user)).token;
} else {
    delete axios.defaults.headers.common['Authorization'];
}
if (localStorage.user) {
    store.dispatch('setUser', (JSON.parse(localStorage.user)));
}
if (localStorage.auth) {
    store.dispatch('setAuth', (JSON.parse(localStorage.auth)));
}
if (localStorage.room) {
    store.dispatch('setRoom', (JSON.parse(localStorage.room)));
}

axios.interceptors.request.use(
    function(config) {
        return config;
    },
    function(err) {
        return Promise.reject(err);
    }
);

axios.interceptors.response.use(
    function(response) {
        return response;
    },
    function(err) {
        if (err.response.status === 401) {
            localStorage.removeItem('user');
            store.dispatch('setUser', false);
            router.push({
                name: 'Login',
                params: { message: 'Session has expired!' }
            });
        }
        return Promise.reject(err);
    }
);

createApp(App).use(router).use(store).mount('#app')