export default {
    loginUser(state, payload){
        state.user = payload;
    },
    searchedUser(state,payload){
        state.searchedUser = payload;
    },
    getFollowing(state,payload){
        console.log('mutations following', payload);
        state.following = payload;
    },
    getFollowers(state,payload){
        console.log('mutations followers', payload)
        state.followers = payload;
    }
}