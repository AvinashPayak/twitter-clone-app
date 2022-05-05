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
        console.log('load profile tweets:', typeof(responseData.tweets));
        context.commit('loadProfileTweets',responseData.tweets);
    },
    async loadHomeTweets(context,data){
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                twitterId: data.twitterId,
            }),
        };
        const response = await fetch('http://localhost:3000/tweets/homeTweets', requestOptions);
        const responseData = await response.json();
        let tweets = responseData.tweets;
        tweets = tweets.filter((tweet)=>{
            if(tweet.user == data.twitterId || tweet.following == data.twitterId) return true;
        })
        const tweetsData = [];
        for(const tweet of tweets){
            const requestOptions = {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  twitterId:tweet.following
                })
              };
              const response = await fetch('http://localhost:3000/user/searchedUser',requestOptions);
              const responseData = await response.json();
              let user = responseData.searchedUser[0];
              const tweetData = {
                  twitterId: tweet.following,
                  firstName: user.firstName,
                  lastName: user.lastName,
                  handle: user.handle,
                  tweetId: tweet.tweetId,
                  text: tweet.text,
              }
              tweetsData.push(tweetData);
        }
        console.log('home:', typeof(tweetsData));
        context.commit('loadHomeTweets', tweetsData);
    }
};