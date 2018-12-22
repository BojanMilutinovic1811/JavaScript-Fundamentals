const posts = [{title: 'post one', body: 'this is post one'}, {title: 'post two', body: 'this is post two'} ];



function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post)
        callback()
    }, 3000);
}

function getPosts() {
    setTimeout(() => {
        console.log(posts)
    }, 1000);
};

createPost({title:'post three', body: 'this is post three'}, getPosts);


