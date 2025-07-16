import { bookData } from "./script.js"

// Destructuring = Getting data out of an Object.
function getBooks(){
  return bookData
}
console.log(getBooks())


function getBook(id){
  return bookData.find((d) => d.id === id)
}

const book = getBook(3)
console.log(book.author)

const { title, author, pages,genres} = book
console.log(title, author, pages, genres)

// const genre1 = genres[0]
// const genre2 = genres[1]
// console.log(genre1, genre2)

const [ genre1, genre2, genre3 ] = genres
console.log(genre1, genre2, genre3)

