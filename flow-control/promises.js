function sendRequest(username) {
    checkDbForUser(username)
        .then(function (response) {
            return checkDbForPosts(response.userId)
        })
        .then(function (response) {
            document.getElementById("greeting")
                .innerHTML = `Welcome back ${username}`;
            document.getElementById("posts")
                .innerHTML = `Here is your post: ${response.posts[0].post}`;
        })
        .catch(function (error) {
            document.getElementById("greeting")
                .innerHTML = "Sorry, we couldnt find the user";
            return;
        })
}

function checkDbForUser(username) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (username != 'Tommy') {
                reject({
                    error: true,
                    userId: null
                })
            } else {
                resolve({
                    error: false,
                    userId: 1
                })
            }
        }, 200);
    })
}

function checkDbForPosts(userId) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (userId == 1) {
                resolve({
                    error: false,
                    posts: [{
                        postId: 1,
                        post: 'Post 1'
                    }]
                })
            } else {
                reject({
                    error: true,
                    posts: null
                })
            }
        }, 100);
    })
}