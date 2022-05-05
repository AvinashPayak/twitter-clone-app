export default {
    loginUser(context, data) {
        context.commit('loginUser', data);
    },
    searchedUser(context, data) {
        context.commit('searchedUser', data);
    },
    async followUser(context, data) {
        const token = data.token;

        const requestOptions = {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(data)
        };
        console.log("token in action", token);
        const response = await fetch('http://localhost:3000/user/followUser', requestOptions);
        const responseData = await response.json();
        console.log('actions: followUser', responseData.message);
    },
    async unfollowUser(context, data) {
        const token = data.token;

        const requestOptions = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(data)
        };
        const response = await fetch('http://localhost:3000/user/unfollowUser', requestOptions);
        const responseData = await response.json();
        console.log('actions: unfollowUser', responseData.message);
    },
    async getFollowers(context, data) {
        const token = data.token;

        const requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(data)
        };
        const response = await fetch('http://localhost:3000/user/getFollowers', requestOptions);
        const responseData = await response.json();
        const followerIds = responseData.followers;
        const users = [];
        for (const id in followerIds) {
            const token = data.token;
            const requestOptions = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    twitterId: followerIds[id].user,
                    token
                })
            };
            const response = await fetch('http://localhost:3000/user/searchedUser', requestOptions);
            const responseData = await response.json();
            let user = responseData.searchedUser[0];
            users.push(user);
        }
        context.commit('getFollowers', users);
    },
    async getFollowing(context, data) {
        const token = data.token;

        const requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(data)
        };
        const response = await fetch('http://localhost:3000/user/getFollowing', requestOptions);
        const responseData = await response.json();
        const followingIds = responseData.following;
        const users = [];
        for (const id in followingIds) {
            const token = data.token;

            const requestOptions = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    twitterId: followingIds[id].following
                })
            };
            const response = await fetch('http://localhost:3000/user/searchedUser', requestOptions);
            const responseData = await response.json();
            let user = responseData.searchedUser[0];
            users.push(user);
        }
        context.commit('getFollowing', users);
    }
};