export default {
    loginUser(context, data){
        console.log('actions', data);
        context.commit('loginUser',data);
    }
};