const Users = require('../models/users');
const bcrypt = require('bcrypt');


exports.putSignup = async (req, res, next) => {
    const twitterId = req.body.twitterId;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const description = req.body.desc;
    const email = req.body.email;
    const handle = req.body.handle;
    const password = req.body.password;
    console.log(twitterId, email);
    // add user details to database
    const emailExists = await Users.fetchByEmail(email);
    if (emailExists.length>0) {
        console.log(emailExists);
        res.status(200).json({
            message: 'Email already exists'
        });
        return;
    }
    const handleExists = await Users.fetchByHandle(handle);
    if (handleExists.length>0) {
        console.log(handleExists);
        res.status(200).json({
            message: 'Username already exists'
        });
        return;
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await Users.save(
        twitterId,
        firstName,
        lastName,
        description,
        email,
        handle,
        hashedPassword);
    res.status(200).json({
        message: 'user registered successfully'
    });
}


exports.postLogin = (req, res, next) => {
    const handle = req.body.handle;
    const password = req.body.password;
    // authenticate user with database
}