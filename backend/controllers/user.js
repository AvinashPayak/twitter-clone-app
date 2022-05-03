const Users = require('../models/users');
const Followers = require('../models/followers');

exports.postSearchedUser = async (req, res, next) => {
    let searchedUser;
    if (req.body.handle) {
        const handle = req.body.handle;
        searchedUser = await Users.fetchByHandle(handle);
    }
    if(req.body.twitterId){
        const twitterId = req.body.twitterId;
        searchedUser = await Users.fetchByTwitterId(twitterId);
    }
    console.log(searchedUser);
    if (searchedUser.length == 0) {
        res.status(200).json({
            message: 'Username does not exist!'
        });
        return;
    }
    res.status(200).json({
        message: 'success!',
        searchedUser
    })
}

exports.putFollowUser = async (req, res, next) => {
    const user = req.body.user;
    const following = req.body.following;
    console.log('put follow user: ', user, following);
    await Followers.save(user,following);
    res.status(200).json({
        message: 'user followed successfully'
    });
}

exports.deleteUnfollowUser = async (req, res, next) => {
    const user = req.body.user;
    const following = req.body.following;
    await Followers.delete(user,following);
    res.status(200).json({
        message: 'following deleted successfully'
    });
}

exports.postFollowers = async (req, res, next) => {
    const user = req.body.user;
    const  followers = await Followers.fetchFollowers(user);
    res.status(200).json({
        followers
    });
}

exports.postFollowing = async (req, res, next) => {
    const user = req.body.user;
    const  following = await Followers.fetchFollowing(user);
    res.status(200).json({
        following
    });
}