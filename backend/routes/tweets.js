const express = require('express');
const router = express.Router();
const isAuth = require('../middleware/auth');


const tweetsController = require('../controllers/tweets');

router.put('/tweet',isAuth,tweetsController.putTweet);
router.post('/myTweets',tweetsController.getMyTweets);
router.post('/homeTweets',isAuth,tweetsController.getHomeTweets);

module.exports = router;