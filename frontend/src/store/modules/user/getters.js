export default {
    getUser(state){
        return state.user;
    },
    hasUser(state){
        if(state.user.id) return true;
        else return false;
    },
    getSearchedUser(state){
        return state.searchedUser;
    },
    getFollowers(state){
        return state.followers;
    },
    getFollowing(state){
        return state.following;
    },
    getToken(state){
        return state.token;
    }
}