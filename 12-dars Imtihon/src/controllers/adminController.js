const { readFile } = require("../utils/fs");

const getAdmin = (req, res) => {
  let authors = readFile("authors");
  let categories = readFile("categories");
  let books = readFile("books");
  let order = readFile("order");
  res.render("admin", { authors, categories, books, order });
};

module.exports = {
  getAdmin,
};
