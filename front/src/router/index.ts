import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '../views/Login.vue'
import ChatRoom from '../views/ChatRoom.vue'
import PageNotFound from '../views/PageNotFound.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/chat-room',
        name: 'ChatRoom',
        component: ChatRoom
    },
    {
        path: "/:pathMatch(.*)*",
        component: PageNotFound
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