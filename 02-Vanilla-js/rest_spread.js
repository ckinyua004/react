import { bookData } from "./script.js";

const newBook = {
    "id": 4,
    "title": "Brave New World",
    "publicationDate": "1932-08-01",
    "author": "Aldous Huxley",
    "genres": [
      "dystopian",
      "science fiction",
      "novels",
      "literature"
    ],
    "hasMovieAdaptation": true,
    "pages": 311,
    "translations": {
      "spanish": "Un Mundo Feliz",
      "chinese": "美丽新世界",
      "french": "Le Meilleur des Mondes"
    },
    "reviews": {
      "goodreads": {
        "rating": 4.07,
        "ratingsCount": 850000,
        "reviewsCount": 12000
      },
      "librarything": {
        "rating": 4.2,
        "ratingsCount": 15000
      }
    }
}

// Add new book using spread operator.
const updatedBookData = [...bookData, newBook]

// Update book title using spread operator.
const updatedBookData2 = bookData.map(book => {
    if (book.id === 3) {
        return { ...book, title: "Nineteen Eighty-Four" };
    }
    return book;
})

// 3. Extract title, author, and genres using rest operator
function extractBookDetails(book) {
  const { title, author, genres, ...rest } = book;
  return { title, author, genres }; // Only returning selected properties
}

// Example usage:
const bookDetails = extractBookDetails(bookData[0]);

// 4. Merge reviews of two books (e.g., "Dune" and "1984")
const mergedReviews = {
  ...bookData[1].reviews,
  ...bookData[2].reviews
};

console.log("Updated Book Data:", updatedBookData);
console.log("Updated Book Data 2:", updatedBookData2);
console.log("Extracted Book Details:", bookDetails);
console.log("Merged Reviews:", mergedReviews);
