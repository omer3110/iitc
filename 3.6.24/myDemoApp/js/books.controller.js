import { bookService } from "./book.service.js";

window.onload = onInit;

function onInit() {
    onGetBooks();
}

function renderBooks() {
    const booksToRender = bookService.getLocalBooks();
    const elList = document.getElementById("bookList");

    const strHtml = booksToRender.map((book) => {
        return `<li>
        <p>${book.name}</p>
        <button onclick="onDeleteBook('${book.id}')">Delete</button>
        </li>`;
    });

    elList.innerHTML = strHtml.join("");
}

async function onGetBooks() {
    await bookService.getBooks();
    renderBooks()
}

export function onDeleteBook(bookId) {
    bookService.deleteBook(bookId);
    renderBooks();
}
