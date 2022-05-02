const Users = require('../models/users');

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