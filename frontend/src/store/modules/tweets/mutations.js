export default {
    loadProfileTweets(state, payload){
        console.log('mutations tweets',payload);
        state.profileTweets = payload;
    }
}