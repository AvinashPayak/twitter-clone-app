export default {
    loginUser(context, data){
        context.commit('loginUser',data);
    },
    searchedUser(context,data){
        context.commit('searchedUser',data) ;
    }
};