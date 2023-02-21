const bookList = document.querySelector('.books');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const addBtn = document.querySelector('.submit-btn');
// const showListSection = document.querySelector('.show-list');
const book = document.querySelector('.book');
let books = localStorage.books
  ? JSON.parse(localStorage.getItem('books')) : [];

const showList = () => {
  let bookContent = '';
  for (let i = 0; i < books.length; i += 1) {
    const tempBook = `
    <p class="book-title">${books[i].title}</p>
    <p>by</p>
    <p class="book-author">${books[i].author}</p>
    <button id=${books[i].id} onclick="removeBook(${books[i].id})">Remove</button>
    `;
    bookContent += tempBook;
  }

  book.innerHTML = bookContent;
  bookList.appendChild(book);
};

window.addEventListener('load', showList);

const addBook = (title, author) => {
  const pushBook = {
    id: Math.floor(Math.random() * Date.now()),
    title,
    author,
  };
  books.push(pushBook);
  bookTitle.value = '';
  bookAuthor.value = '';
  showList();
  localStorage.setItem('books', JSON.stringify(books));
};

addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  addBook(bookTitle.value, bookAuthor.value);
});

const removeBook = (id) => {
  const filterBook = books.filter((book) => book.id !== id);

  books = filterBook;
  showList();
  localStorage.setItem('books', JSON.stringify(books));
};

console.log(removeBook());