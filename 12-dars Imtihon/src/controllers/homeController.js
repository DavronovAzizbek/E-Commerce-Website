const { readFile } = require("../utils/fs");

const getHome = (req, res) => {
  let books = readFile("books");
  res.render("index", { books });
};

module.exports = {
  getHome,
};
