import BookList from './modules/bookList.js';

const bookList = new BookList();

const addButton = document.querySelector('.submit-btn');
addButton.addEventListener('click', (event) => {
  event.preventDefault();
  bookList.addBook();
});

bookList.render();
