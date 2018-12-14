

class UI {
    constructor() {
        this.post = document.getElementById('posts');
        this.titleInput = document.getElementById('title');
        this.bodyInput = document.getElementById('body');
        this.id = document.getElementById('id');
        this.postSubmit = document.querySelector('.post-submit');
        this.forState = 'add';
    }

    showPosts(posts) {

        let output = '';

        posts.forEach(post => {
            output+= `
            <div class='mb-3 card'>
             <div class='card-body'>
             <h4 class='card-title'>${post.title}</h4>
             <p class='card-text'>${post.body}</p>
              <a href='#' class='card-link edit' data-id='${post.id}'><i class='far fa-edit'></i></a>
              <a href='#' class='delete card-link' data-id='${post.id}'><i class='fas fa-trash'></i></a>
             </div>
             </div>
            `
        })

        this.post.innerHTML = output; 
    }

    showAlert(message, className) {
        if(!document.querySelector('.alert')) {
        const alert = document.createElement('div');
        alert.className = className;
        alert.textContent = message;
        const container = document.querySelector('.card-form');
        container.insertBefore(alert, this.post)
        setTimeout(()=> {
            document.querySelector('.alert').remove()
        }, 2000)
    }
    }

    clearFields() {
        this.titleInput.value = '';
        this.bodyInput.value = '';
    }

    editPost(data) {
        this.titleInput.value = data.title;
        this.bodyInput.value = data.body;
        this.id.value = data.id; 

        this.changeState('edit');
    }

    changeState(type) {
        if(type === 'edit') {
          
            this.postSubmit.classList = 'btn btn-warning btn-block post-submit';
            this.postSubmit.value = 'Edit post';

            
                const button = document.createElement('button');
                button.textContent = 'Cancel edit';
                button.classList = 'btn btn-danger btn-block post-cancel';
            
           

           const formEnd = document.querySelector('.form-end');
           const cardForm = document.querySelector('.card-form');
           cardForm.insertBefore(button, formEnd)
           
        } else {
            this.postSubmit.classList = 'btn btn-success btn-block post-submit';
            this.postSubmit.value = 'Post it';

            if(document.querySelector('.post-cancel')) document.querySelector('.post-cancel').remove()
            this.clearFields();
        }
    }
}

export const ui = new UI();