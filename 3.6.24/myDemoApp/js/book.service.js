import { storageService } from "./async-storage-service.js";
import { DUMMY_BOOKS } from "./books.js";

const STORAGE_KEY = "bookDB";
let gBooks = [];

function getLocalBooks() {
    return gBooks;
}

async function getBooks() {
    const books = await storageService.get(STORAGE_KEY);
    if (books.length === 0) {
        await storageService.postMany(STORAGE_KEY, DUMMY_BOOKS);
        //getBooks()
    }
    gBooks = books;
    return books;
}

async function deleteBook(bookId) {
    await storageService.remove(STORAGE_KEY, bookId);
    gBooks = gBooks.filter((book) => book.id !== bookId);
}


export const bookService = {
    getLocalBooks,
    getBooks,
    deleteBook
};