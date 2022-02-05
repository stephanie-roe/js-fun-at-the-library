function createTitle(bookIdea) {
  return `The ${bookIdea}`;
};


function buildMainCharacter(name1, age1, pronouns1) {
   return {
     name: name1,
     age: age1,
     pronouns: pronouns1
   }
};


var reviews = [];
function saveReview(reviewContent, reviews) {
  if (reviews.indexOf(reviewContent) >= 0) {
    return
  } else {
    reviews.push(reviewContent)
  }
};


function calculatePageCount(title) {
  return (20 * title.length)
};

function writeBook(title1, mainCharacter1, genre1) {
  return{
    title: title1,
    mainCharacter: mainCharacter1,
    pageCount: calculatePageCount(title1),
    genre: genre1
  }
}

function editBook(book) {
  book.pageCount = book.pageCount * 0.75;
  return book 
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
