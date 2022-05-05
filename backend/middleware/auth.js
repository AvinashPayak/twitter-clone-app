const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
     const token = req.get('Authorization').split(' ')[1];
     console.log('middleware ',token);
     try{
         decodedToken = jwt.verify(token, 'somesupersecret');
     } catch(err){
         err.statusCode = 500;
         throw err;
     }
     if(!decodedToken){
         const error = new Error('Not Authenticated');
         error.statusCode = 401;
         throw error;
     }
     req.handle = decodedToken.handle;
     next();
}