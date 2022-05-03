export default {
    loginUser(state, payload){
        state.user = payload;
    },
    searchedUser(state,payload){
        state.searchedUser = payload;
    }
}