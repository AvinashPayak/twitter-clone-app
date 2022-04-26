export default {
    getUser(state){
        return state.user;
    },
    hasUser(state){
        if(state.user.id) return true;
        else return false;
    }
};