import { bookData } from "./script.js";

function getBook(){
    return bookData[0]
}
const book  = getBook()
const { title, author, publicationDate} = book

const summary = `${title} is the book name, ${author} is the author and ${publicationDate} is the publication date.`
console.log(summary)

//Template literals are like formatted strings in python.