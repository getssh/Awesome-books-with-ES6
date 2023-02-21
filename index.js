const bookList = document.querySelector('.books');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const addBtn = document.querySelector('.submit-btn');
const showListSection = document.querySelector('.show-list');
const book = document.querySelector('.book');
let books = [];

const addBook = (title, author) => {
  let pushBook = {
    id: Math.floor(Math.random() * Date.now()),
    title: title,
    author: author
  }
  books.push(pushBook);
}

addBook("Abebe", "kebede");
addBook("Dereje", "Debela");
addBook("Dereje", "Debela");

console.log(books[0].title);

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
  // bookList.appendChild(showListSection);
}

window.addEventListener('load', showList);

const removeBook = (id) => {
  let filterBook = books.filter((book) => {
    return book.id !== id;
  })

  books = filterBook;
  console.log(books); 
  location.reload();
}