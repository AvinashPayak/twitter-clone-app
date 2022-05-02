import { createRouter, createWebHistory } from 'vue-router'
import UserSignup from './pages/auth/UserSignup.vue';
import UserLogin from './pages/auth/UserLogin.vue';

import TwitterHome from './pages/twitter/TwitterHome.vue';
import TwitterProfile from './pages/twitter/TwitterProfile.vue';
import TwitterDashboard from './components/layouts/TwitterDashboard.vue'

import searchedProfile from './pages/twitter/searchedProfile.vue';


import ProfileTweets from './components/sections/ProfileTweets.vue'
import ProfileFollowing from './components/sections/ProfileFollowing.vue'
import ProfileFollowers from './components/sections/ProfileFollowers.vue'



const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/users', component: null },
        { path: '/signup', component: UserSignup },
        { path: '/login', component: UserLogin },
        {path: '/users/:id', props:true, component:TwitterDashboard, children: [
            {path: 'home', component:TwitterHome},
            {path:'profile',component:TwitterProfile, redirect:'/users/:id/profile/tweets', children:[
                {path: 'tweets',component:ProfileTweets},
                {path:'followers', component:ProfileFollowers},
                {path:'following',component:ProfileFollowing}
            ]},
            {path:'searchedProfile',component:searchedProfile,redirect: '/users/:id/searchedProfile/tweets',children:[
                {path: 'tweets',component:ProfileTweets},
                {path:'followers', component:ProfileFollowers},
                {path:'following',component:ProfileFollowing}
            ]}
        ]},
        { path: '/notFound(.*)', component: null }
    ]
});

export default router;