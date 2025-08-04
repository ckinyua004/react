import { bookData } from "./script.js";

function getBook(){
    return bookData[0]
}

const book = getBook();

const {pages} = book

const pagesRange = pages > 1000 ? "over a thousand" : "less than a thousand"

console.log(`The book has ${pagesRange} pages`)