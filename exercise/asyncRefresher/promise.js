// simple promise example

let posts = [{
    title: 'post 1',
    body: 'body 1'
}, {
    title: 'post 2',
    body: 'body 2'
}]



function createPost(posts) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const post = {
                title: 'post 3',
                body: 'body 3'
            }
            posts.push(post)
            posts = 0;
            posts ? res(posts) : rej('something went wrong')
        }, 3000)
    })
}


function printPosts(posts) {
    setTimeout(() => {
        console.log(posts);
    }, 2000)
}

createPost(posts)
    .then(posts => printPosts(posts))
    .catch(response => console.log(response));