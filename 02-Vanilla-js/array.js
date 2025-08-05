import { bookData } from "./script.js";

function getBooks(){
    return bookData
}

const book = getBooks()
console.log(book)

// map filter reduce

//map
const x = [1,2,3,4,5].map((el) => el*2)
console.log(x)

const titles = book.map((book) => book.title)
const essentialData = book.map((book) => ({
    title: book.title,
    author:book.author,
    publicationDate: book.publicationDate
}))

console.log(essentialData, titles)

//filter
const longBooks = book.filter((book) => book.pages > 800)
console.log(longBooks)

const adventureBooks = book.filter((book) => book.genres.includes('adventure'))
console.log(adventureBooks)

//reduce
