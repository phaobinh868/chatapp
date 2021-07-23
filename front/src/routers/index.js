import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Login',
        component: () => import('@/views/Login')
    },
    {
        path: '/chat-room',
        name: 'ChatRoom',
        component: () => import('@/views/ChatRoom')
    },
    {
        path: "/:pathMatch(.*)*",
        component: () => import('@/views/PageNotFound')
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach(async (to, from, next) => {
    if (to.name == 'ChatRoom') {
        if (localStorage.user == null || JSON.parse(localStorage.auth) != true) {
            next({
                name: 'Login'
            });
        } else {
            next();
        }
    } else if (to.name == 'Login') {
        if (localStorage.user != null && JSON.parse(localStorage.auth) == true) {
            next({
                name: 'ChatRoom'
            });
        } else {
            next();
        }
    }
});

export default router;