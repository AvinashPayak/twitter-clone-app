const Tweets = require('../models/tweets');
const express = require('express');


exports.putTweet = async (req, res, next) => {
    const twitterId = req.body.twitterId;
    const tweetId = req.body.tweetId;
    const text = req.body.text;
    console.log(tweetId, twitterId);
    // add tweet to database
    const tweet = await Tweets.save(tweetId, twitterId, text);
    res.status(200).json({
        message: 'tweet added to database'
    });
}


exports.getMyTweets = async (req, res, next) => {
    const twitterId = req.body.twitterId;
    console.log('getting my tweets',twitterId)

    const tweets = await Tweets.fetchProfileTweets(twitterId);
    res.status(200).json({
        message:'tweets recieved',
        tweets 
    })

    
    // authenticate user with database
}