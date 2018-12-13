import { ui } from './ui';


//get posts on DOM load
const httpAddress = 'http://localhost:3000/posts';

document.addEventListener('DOMContentLoaded', loadPosts);

document.querySelector('.post-submit').addEventListener('click', submitPost)


function loadPosts() {
    fetch(httpAddress)
    .then(res=>res.json())
    .then(data => ui.showPosts(data))
    .catch(err=>console.log(err))
}

function submitPost() {
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;

    const post = {
        title: title,
        body: body        
    }

    fetch(httpAddress, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(post)
    })
    .then(res=>res.json())
    .then(()=>{
        ui.clearFields();
        ui.showAlert('Post added', 'alert alert-success');
        loadPosts()})
    .catch(err=>console.log(err))
}