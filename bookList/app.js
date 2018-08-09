
document.querySelector('form').addEventListener('submit', addBook)

function addBook(e) {
     
    const bookTitle = document.getElementById('title').value,
          bookAuthor = document.getElementById('author').value,
          bookIsbn = document.getElementById('isbn').value,
          book = new Book(bookTitle, bookAuthor, bookIsbn),
          ui = new UI();

          ui.createBookElement(book);
          ui.clearInputs();

     

    e.preventDefault();
}

class UI {
    createBookElement(book) {
        const bookElement = document.createElement('tr'),
              bookList = document.getElementById('book-list');
              bookElement.innerHTML = `
              <td><i class="fas fa-book mr-2"></i>${book.title}</td>
              <td>${book.author}</td>
              <td>${book.isbn}</td>
              <td></td>
              `
              bookList.appendChild(bookElement);
    }

    clearInputs() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    addBook() {

    }   
}