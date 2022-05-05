const { Model } = require('objection');

module.exports = class Tweets extends Model {
    static get tableName() {
        return 'tweets';
    }

    static save(tweetId, twitterId, text) {
        return Tweets.query().insert({ tweetId, text, twitterId });
    }

    static fetchHomeTweets(twitterId) {
        const query =  Tweets.query()
        .join('followers', 'followers.following', '=', 'tweets.twitterId')
        .select('*')
        //const tweets = q.toKnexQuery().toSQL();
        //console.log(tweets);
        return query;
    }

    static fetchProfileTweets(twitterId) {
        return Tweets.query().select('*').where('twitterId', '=', twitterId);
    }
}