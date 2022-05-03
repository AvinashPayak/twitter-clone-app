const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.post('/searchedUser', userController.postSearchedUser);
router.put('/followUser', userController.putFollowUser);
router.delete('/unfollowUser', userController.deleteUnfollowUser);
router.post('/getFollowers', userController.postFollowers);
router.post('/getFollowing', userController.postFollowing);


module.exports = router;