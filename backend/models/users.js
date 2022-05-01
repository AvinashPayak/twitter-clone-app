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
        return Users.query().select('handle').where('handle', '=',handle);
    }
    static getUser(handle){
        return Users.query().select('*').where('handle', '=',handle);
    }

}

