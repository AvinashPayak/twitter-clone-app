import {createStore} from 'vuex';

import userModule from './modules/user/index';
import tweetsModule from './modules/tweets/index';

const store = createStore({
    modules: {
        user: userModule,
        tweets: tweetsModule
    }
});

export default store;