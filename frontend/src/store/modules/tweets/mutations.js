export default {
    loadProfileTweets(state, payload){
        state.profileTweets = payload;
    },
    loadHomeTweets(state, payload){
        console.log('mutations',payload);
        state.homeTweets = payload;
    }
}