const express = require('express');
const router = express.Router();

const tweetsController = require('../controllers/tweets');

router.put('/tweet',tweetsController.putTweet);
router.get('/myTweets',tweetsController.getMyTweets);

module.exports = router;