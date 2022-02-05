
function shelfBook(book, sciFiShelf) {
    if (sciFiShelf.length < 3) {
      return sciFiShelf.unshift(book)
    } else {
      return
    }
};

function unshelfBook(book, sciFiShelf) {
  for (var i = 0; i < sciFiShelf.length; i++) {
    if (sciFiShelf[i].title === book) {
    return sciFiShelf.splice(i, 1)
  }
}
};

var newShelf = [];

function listTitles(fantasyShelf) {
  for (var i = 0; i < fantasyShelf.length; i++) {
    newShelf.push(fantasyShelf[i].title)
  }
    return newShelf.join(", ")
};

function searchShelf(sciFiShelf, book) {
  for (var i = 0; i < sciFiShelf.length; i++) {
    if (sciFiShelf[i].title === book) {
      return true
    }
  }
      return false

  };


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
