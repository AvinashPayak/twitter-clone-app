const { Model } = require('objection');

module.exports = class Followers extends Model {
    static get tableName() {
        return 'followers';
    }

    static save(user,following) {
        console.log("followers model about to save",user,following);
        return Followers.query().insert({user, following});
    }

    static delete(user,following){
        return Followers.query().delete().where('user','=',user).where('following','=',following);
    }

    static fetchFollowers(user){
        return Followers.query().select('user').where('following', '=',user);
    }

    static fetchFollowing(user){
        return Followers.query().select('following').where('user', '=',user);
    }

}

