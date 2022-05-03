export default {
    loginUser(context, data) {
        context.commit('loginUser', data);
    },
    searchedUser(context, data) {
        context.commit('searchedUser', data);
    },
    async followUser(context,data) {
        const requestOptions = {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        };
        console.log(context);
        console.log("follow User Action: ",data)
        const response = await fetch('http://localhost:3000/user/followUser',requestOptions);
        const responseData = await response.json();
        console.log('actions: followUser', responseData.message);
    },
    async unfollowUser(context, data){
        console.log("inside unfollow user", data, context);
        const requestOptions = {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        };
        const response = await fetch('http://localhost:3000/user/unfollowUser',requestOptions);
        const responseData = await response.json();
        console.log('actions: unfollowUser', responseData.message);
    },
    async getFollowers(context,data){
        const requestOptions = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        };
        const response = await fetch('http://localhost:3000/user/getFollowers',requestOptions);
        const responseData = await response.json();
        console.log('actions: getFollowers', responseData.followers);
        context.commit('getFollowers', responseData.followers);
    },
    async getFollowing(context,data){
        const requestOptions = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        };
        const response = await fetch('http://localhost:3000/user/getFollowing',requestOptions);
        const responseData = await response.json();
        console.log('actions: getFollowing', responseData.following);
        context.commit('getFollowing', responseData.following);
    }
};