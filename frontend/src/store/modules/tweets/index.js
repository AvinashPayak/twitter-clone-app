import mutations from './mutations';
import getters from './getters';
import actions from './actions';

export default {
    namespaced:true,
    state(){
        return {
            profileTweets: {
                // profile tweets data
            },
            homeTweets:{
                // home tweets data
            },
            token: ''
        }
    },
    mutations,
    getters,
    actions
}

