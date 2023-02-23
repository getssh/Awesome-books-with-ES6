import BookList from './modules/bookList.js';
import { DateTime } from "./luxon.js";


const bookList = new BookList();

const addButton = document.querySelector('.submit-btn');
addButton.addEventListener('click', (event) => {
  event.preventDefault();
  bookList.addBook();
});

bookList.render();

const list = document.querySelector('.list');
const addNew = document.querySelector('.add-new');
const contact = document.querySelector('.contact');
const showList  = document.querySelector('.show-list');
const showAdd = document.querySelector('.show-new');
const showContact = document.querySelector('.show-contact');
const showTime = document.querySelector('.show-time');

list.addEventListener('click', (e) => {
  e.preventDefault();
  showList.style.display = "block";
  showAdd.style.display = "none";
  showContact.style.display = "none";
})

addNew.addEventListener('click', (e) => {
  e.preventDefault();
  showList.style.display = "none";
  showAdd.style.display = "block";
  showContact.style.display = "none";
})

contact.addEventListener('click', (e) => {
  e.preventDefault();
  showList.style.display = "none";
  showAdd.style.display = "none";
  showContact.style.display = "block";
})

const dayTime = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
const showLocalTime = () => { showTime.textContent = `${dayTime}`; };

showLocalTime();