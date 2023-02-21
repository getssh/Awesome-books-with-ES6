const bookList = document.querySelector('.books');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const addBtn = document.querySelector('.submit-btn');
const showListSection = document.querySelector('.show-list');
const book = document.querySelector('.book');
let books = [];

let allBooks;
const showList = () => {
  let bookContent = ``;
  for (let i = 0; i < books.length; i += 1) {
    let tempBook = `
    <p class="book-title">${books[i].title}</p>
    <p>by</p>
    <p class="book-author">${books[i].author}</p>
    <button id=${books[i].id} onclick="removeBook(${books[i].id})">Remove</button>
    `
    bookContent += tempBook;
  }

  book.innerHTML = bookContent;
  bookList.appendChild(book);
}

window.addEventListener('load', showList);

const addBook = (title, author) => {
  let pushBook = {
    id: Math.floor(Math.random() * Date.now()),
    title: title,
    author: author
  }
  books.push(pushBook);
  bookTitle.value = '';
  bookAuthor.value = '';
  showList();
}

addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  addBook(bookTitle.value, bookAuthor.value);
})

const removeBook = (id) => {
  let filterBook = books.filter((book) => {
    return book.id !== id;
  })

  books = filterBook;
  console.log(books);
  showList()
}

console.log(books);