import { createRouter, createWebHistory } from 'vue-router'
import UserSignup from './pages/auth/UserSignup.vue';
import UserLogin from './pages/auth/UserLogin.vue';

import TwitterHome from './pages/twitter/TwitterHome.vue';
import TwitterDashboard from './components/layouts/TwitterDashboard.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/users', component: null },
        { path: '/signup', component: UserSignup },
        { path: '/login', component: UserLogin },
        {path: '/users/:id', component:TwitterDashboard, children: [
            {path: 'home', component:TwitterHome},
            {path:'profile',redirect:'/profile/tweets', children:[
                {path: 'tweets',component:null},
                {path:'followers', component:null},
                {path:'following',component:null}
            ]}
        ]},
        { path: '/notFound(.*)', component: null }
    ]
});

export default router;