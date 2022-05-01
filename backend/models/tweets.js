const { Model } = require('objection');

module.exports = class Tweets extends Model {
    static get tableName() {
        return 'tweets';
    }

    static save(tweetId, twitterId, text) {
        return Tweets.query().insert({tweetId,text,twitterId});
    }

    static getUserHomeTweets(handle){
        return 
    }

    static getProfileTweets(twitterId){
        return Tweets.query().select('*').where('twitterId', '=' , twitterId);
    }
}