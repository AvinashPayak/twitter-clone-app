export default {
    getUser(state){
        return state.user;
    },
    hasUser(state){
        if(state.user.id) return true;
        else return false;
    },
    getSearchedUser(state){
        console.log('getter searchedUser', state.searchedUser);
        return state.searchedUser;
    }
};