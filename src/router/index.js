import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue';
import SignIn from '../views/SignIn.vue';
import SignUp from '../views/SignUp.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/login', name: 'Login', component: SignIn},
        {path: '/register', name: 'SignUp', component: SignUp},
    ]
});

export default router;