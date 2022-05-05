const express = require('express');
const router = express.Router();
const isAuth = require('../middleware/auth');

const userController = require('../controllers/user');

router.post('/searchedUser',isAuth, userController.postSearchedUser);
router.put('/followUser',isAuth, userController.putFollowUser);
router.delete('/unfollowUser',isAuth, userController.deleteUnfollowUser);
router.post('/getFollowers',isAuth, userController.postFollowers);
router.post('/getFollowing',isAuth, userController.postFollowing);


module.exports = router;