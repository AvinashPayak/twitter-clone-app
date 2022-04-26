export default {
    loginUser(state, payload){
        console.log('mutations',payload);
        state.user = payload;
    }
}