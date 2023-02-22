import Book from './book.js';

export default class BookList {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  addBook() {
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');

    const title = titleInput.value.trim();
    const author = authorInput.value.trim();

    if (title === '' || author === '') {
      return;
    }

    const id = `${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    const newBook = new Book(id, title, author);

    this.books.push(newBook);
    this.save();
    this.render();
    titleInput.value = '';
    authorInput.value = '';
  }

  removeBook(id) {
    this.books = this.books.filter((book) => book.id !== id);
    this.save();
    this.render();
  }

  save() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  render() {
    const bookListElement = document.querySelector('.books');
    bookListElement.innerHTML = '';

    if (this.books.length === 0) {
      bookListElement.innerHTML = '<p>No books added yet</p>';
      return;
    }

    this.books.forEach((book) => {
      const bookElement = document.createElement('div');
      bookElement.classList.add('book');
      bookElement.innerHTML = `
        <h3>${book.title}</h3>
        <p>By ${book.author}</p>
        <button data-id="${book.id}" class="remove-btn">Remove</button>
      `;
      bookListElement.appendChild(bookElement);
    });

    const removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const id = event.target.getAttribute('data-id');
        this.removeBook(id);
      });
    });
  }
}
