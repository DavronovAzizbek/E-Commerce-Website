const { readFile, writeFile } = require("../utils/fs");

const createBook = (req, res) => {
  let books = readFile("books");
  let authors = readFile("authors");
  let categories = readFile("categories");
  let { name, desc, count, price, authorId, categoryId, img } = req.body;

  authorId = authorId * 1;
  categoryId = categoryId * 1;

  let findBooks = books.find((el) => el.name === name);
  let findAuthor = authors.find((el) => el.id === authorId);
  let findCategories = categories.find((el) => el.id === categoryId);

  if (!findBooks && findAuthor && findCategories) {
    books.push({
      id: books.at(-1)?.id + 1 || 1,
      name,
      desc,
      count,
      price,
      authorId,
      categoryId,
      img,
    });

    writeFile("books", books);
    res.redirect("/admin");
  } else {
    res.redirect("/admin");
  }
};

module.exports = {
  createBook,
};
