exports.putSignup = (req,res,next)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const desc = req.body.desc;
    const email = req.body.email;
    const handle = req.body.handle;
    const password = req.body.password;
    console.log(handle, email);
    // add user details to database
}

exports.postLogin = (req,res,next)=>{
    const handle = req.body.handle;
    const password = req.body.password;
    // authenticate user with database
}