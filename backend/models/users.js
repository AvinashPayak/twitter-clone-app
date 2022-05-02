const { Model } = require('objection');

module.exports = class Users extends Model {
    static get tableName() {
        return 'users';
    }

    static save(twitterId, firstName, lastName, description, email, handle, password) {
        return Users.query().insert({twitterId, firstName, lastName, description, email, handle, password
        });
    }

    static fetchByEmail(email){
        return Users.query().select('email').where('email','=',email);
    }

    static fetchByHandle(handle){
        return Users.query().select('*').where('handle', '=',handle);
    }

    static fetchByTwitterId(twitterId){
        return Users.query().select('*').where('twitterId', '=',twitterId);
    }

}

