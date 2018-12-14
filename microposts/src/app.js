import { ui } from './ui';


//get posts on DOM load
const httpAddress = 'http://localhost:3000/posts';

document.addEventListener('DOMContentLoaded', loadPosts);

document.querySelector('.post-submit').addEventListener('click', submitPost);

document.querySelector('.card-body').addEventListener('click', enableEdit);
document.querySelector('.card-body').addEventListener('click', cancelPost);
document.getElementById('posts').addEventListener('click', deletePost);



function loadPosts() {
    fetch(httpAddress)
    .then(res=>res.json())
    .then(data => ui.showPosts(data))
    .catch(err=>console.log(err))
}

function submitPost(e) {
   
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;
    const id = document.getElementById('id').value;

    const post = {
        title: title,
        body: body        
    }
   
        if(title === '' || body === '') {
            ui.showAlert('All fields are required!', 'alert alert-danger')
        } else {
            if(id === '') {
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
            } else {
                
                fetch(`${httpAddress}/${id}`, {
                    method: "PUT",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(post)
                })
                .then(res=>res.json())
                .then(()=>{
                    ui.clearFields();
                    ui.showAlert('Post updated', 'alert alert-success');
                    loadPosts()})
                .catch(err=>console.log(err))
              }     
        }  
    }

function enableEdit(e) {
    if(e.target.classList.contains('fa-edit')) {
        const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
        const body = e.target.parentElement.previousElementSibling.textContent;
        const id = e.target.parentElement.dataset.id;

        const data = {
            title,
            body,
            id
        }

        ui.editPost(data)
    }
}

function cancelPost(e) {
    if(e.target.classList.contains('post-cancel')) {
        ui.changeState('add');
    }
}

function deletePost(e) {
   
    if(e.target.classList.contains('fa-trash')) {
        const id = e.target.parentElement.dataset.id;
        e.target.parentElement.parentElement.parentElement.remove();

        fetch(`${httpAddress}/${id}`, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(()=>{
            ui.clearFields();
            ui.showAlert('Post deleted', 'alert alert-danger');
            loadPosts()})
        .catch(err=>console.log(err))
    }
}
