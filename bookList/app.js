class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

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
}

class Store {

    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'))
        }
        return books;
    }

    static displayBooks() {
        const books = Store.getBooks();

        books.forEach(function (book) {
            const ui = new UI;
            ui.createBookElement(book)
        })
    }

    static saveBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static clearBooks(isbn) {

        const books = Store.getBooks();
        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                books.splice(index, 1)
            }
        })
        localStorage.setItem('books', JSON.stringify(books));
    }
}


document.querySelector('form').addEventListener('submit', addBook);
document.addEventListener('DOMContentLoaded', Store.displayBooks);
document.getElementById('book-list').addEventListener('click', deleteBook);

const bookList = [];


function addBook(e) {

    const bookTitle = document.getElementById('title').value,
        bookAuthor = document.getElementById('author').value,
        bookIsbn = document.getElementById('isbn').value,
        book = new Book(bookTitle, bookAuthor, bookIsbn),
        ui = new UI();

    if (bookTitle === '' || bookAuthor === '' || bookIsbn === '') {
        ui.showAlert('Please fill in required fields!', 'danger');

    } else {
        bookList.push(book)
        if (bookList.length < 6) {
            ui.createBookElement(book);
            ui.clearInputs();
            ui.showAlert('The book has been added!', 'success');
            Store.saveBook(book);
        } else {
            ui.showAlert('You can add up to 5 books!', 'warning');
            ui.clearInputs();
        }
    }
    e.preventDefault();
}

function deleteBook(e) {
    const ui = new UI();
    ui.removeBook();
    Store.clearBooks(e.target.parentElement.parentElement.previousElementSibling.textContent)
}