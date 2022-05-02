export default {
    loginUser(context, data){
        console.log('actions', data);
        context.commit('loginUser',data);
    },
    searchedUser(context,data){
        console.log('searched actions', data);
        context.commit('searchedUser',data) ;
    }
};