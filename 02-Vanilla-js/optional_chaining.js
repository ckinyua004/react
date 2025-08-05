import { bookData } from "./script.js";

function getBook() {
    return bookData[0];
}

const book = getBook();

function getTotalReview(book) {
    if (!book || !book.reviews) return 0;

    const goodReads = book.reviews.goodreads?.reviewscount ?? 0;
    const librarything = book.reviews.librarything?.ratingscount ?? 0;

    return goodReads + librarything;
}

console.log(getTotalReview(book));
