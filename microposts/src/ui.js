

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
        const alert = document.createElement('div');
        alert.className = className;
        alert.textContent = message;
        const container = document.querySelector('.card-form');
        container.insertBefore(alert, this.post)
        setTimeout(()=> {
            document.querySelector('.alert').remove()
        }, 1000)
    }



    clearFields() {
        this.titleInput.value = '';
        this.bodyInput.value = '';
    }
}

export const ui = new UI();