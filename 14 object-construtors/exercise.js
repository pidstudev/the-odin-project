const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'}`;
    };
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function isFieldEmpty(value) {
    return value.trim() === '';
}

function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    if (isFieldEmpty(title) || isFieldEmpty(author)) {
        return;
    }

    const book = new Book(title, author, pages, read);
    addBookToLibrary(book);
    displayLibrary();

    // Hide the form after adding the book
    const popupForm = document.getElementById('popup-form');
    popupForm.style.display = 'none';

    // Reset form fields
    document.getElementById('book-form').reset();
}

function displayLibrary() {
    const libraryList = document.getElementById('library-list');
    libraryList.innerHTML = '';

    myLibrary.forEach(book => {
        const li = document.createElement('li');
        li.textContent = book.info();
        libraryList.appendChild(li);
    });
}

// Event listener for showing the popup form
document.getElementById('add-book-btn').addEventListener('click', function () {
    document.getElementById('popup-form').style.display = 'block';
});

// Event listener for form submission
document.getElementById('book-form').addEventListener('submit', function (event) {
    event.preventDefault();
    addBook();
});

// Initialize library display
document.addEventListener('DOMContentLoaded', displayLibrary);
