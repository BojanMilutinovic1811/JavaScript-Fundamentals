class UI {
    createBookElement(book) {
        const bookElement = document.createElement('tr'),
            bookList = document.getElementById('book-list');
        bookElement.innerHTML = `
              <td><i class="fas fa-book mr-2"></i>${book.title}</td>
              <td>${book.author}</td>
              <td>${book.isbn}</td>
              <td><a href="#">
              <span class="glyphicon glyphicon-remove text-danger">x</span>
            </a></td>
            `
        bookList.appendChild(bookElement);
    }

    removeBook() {
        document.getElementById('book-list').addEventListener('click', (e) => {

            if (e.target.className === 'glyphicon glyphicon-remove text-danger') {
                e.target.parentElement.parentElement.parentElement.remove();
                this.showAlert('The book has been deleted!', 'success')
            }
        })
    }

    clearInputs() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }

    showAlert(text, classtype) {

        const alert = document.createElement('div'),
            container = document.querySelector('.container'),
            form = document.querySelector('form');

        alert.className = `alert alert-${classtype} font-weight-bold`;
        alert.textContent = text;
        alert.setAttribute('role', 'alert');
        container.insertBefore(alert, form);
        setTimeout(() => {
            alert.remove();
        }, 3000);
    }

    clearList() {
        if(bookList.length>0) {
        if(confirm('Do you really want to delete the complete list?')) {
        document.getElementById('book-list').innerHTML = '';
        localStorage.clear();
        }
    }
}
}