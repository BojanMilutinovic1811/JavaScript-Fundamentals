const posts = [{title: 'post one', body: 'this is post one'}, {title: 'post two', body: 'this is post two'} ];



function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)
            resolve()
        }, 3000);
    
    })
}

function getPosts() {
    setTimeout(() => {
        console.log(posts)
    }, 1000);
};

createPost({title:'post three', body: 'this is post three'})
.then(() => getPosts());


