import { bookData } from "./script.js";

function getBook(){
    return bookData[0]
}

const book = getBook()

function getTotalReview(book){
    const goodReads = book.reviews.goodreads.reviewscount
    const librarything = book.reviews.librarything?.ratingscount ?? 0

    return goodReads + librarything
}

console.log(getTotalReview(book))