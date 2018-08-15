class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

const bookList = [];

document.querySelector('form').addEventListener('submit', addBook);
document.addEventListener('DOMContentLoaded', Store.displayBooks);
document.getElementById('book-list').addEventListener('click', deleteBook);
document.getElementById('clear-list').addEventListener('click', ()=>{
    const ui = new UI;
    ui.clearList();
    ui.showAlert('The list has been deleted', 'danger')});




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