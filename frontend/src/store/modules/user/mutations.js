export default {
    loginUser(state, payload){
        state.user = payload.user;
        state.token = payload.token;
    },
    searchedUser(state,payload){
        state.searchedUser = payload;
    },
    getFollowing(state,payload){
        state.following = payload;
    },
    getFollowers(state,payload){
        state.followers = payload;
    }
}