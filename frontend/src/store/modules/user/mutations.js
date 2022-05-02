export default {
    loginUser(state, payload){
        console.log('mutations',payload);
        state.user = payload;
    },
    searchedUser(state,payload){
        console.log('searched mutations', payload);
        state.searchedUser = payload;
    }
}