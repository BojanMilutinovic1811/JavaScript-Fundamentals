// simple callback example

let posts = [{
    title: 'post 1',
    body: 'body 1'
}, {
    title: 'post 2',
    body: 'body 2'
}]



function createPost(posts, callback) {
    setTimeout(() => {
        const post = {
            title: 'post 3',
            body: 'body 3'
        }
        posts.push(post)
        callback(posts)
    }, 3000)
}


function printPosts(posts) {
    setTimeout(() => {
        console.log(posts);
    }, 2000)
}

createPost(posts, printPosts);