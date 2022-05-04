export default {
    loginUser(state, payload){
        state.user = payload;
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