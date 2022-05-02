export default {
    async postTweet(context, data) {
        const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                twitterId: data.twitterId,
                tweetId: data.tweetId,
                text: data.text,
            }),
        };
        console.log("inside actions", data.tweetId, data.twitterId, data.text);
        const response = await fetch('http://localhost:3000/tweets/tweet', requestOptions);
        const responseData = await response.json();
        console.log(responseData.message);
        //this.loadProfileTweets(data);
    },
    async loadProfileTweets(context, data){
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                twitterId: data.twitterId,
            }),
        };
        const response = await fetch('http://localhost:3000/tweets/myTweets', requestOptions);
        const responseData = await response.json();
        context.commit('loadProfileTweets',responseData.tweets);
        console.log(responseData.message);
        console.log(responseData.tweets);
    }
};