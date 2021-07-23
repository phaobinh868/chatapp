import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Login',
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/chat-room',
        name: 'ChatRoom',
        component: () => import('@/views/ChatRoom.vue')
    },
    {
        path: "/:pathMatch(.*)*",
        component: () => import('@/views/PageNotFound.vue')
    }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
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