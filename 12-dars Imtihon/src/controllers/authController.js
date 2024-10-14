const { readFile, writeFile } = require("../utils/fs");

const createAuthor = (req, res) => {
  let authors = readFile("authors");
  let { fullName } = req.body;
  let findAuthor = authors.find((el) => el.fullName === fullName);

  if (findAuthor) {
    res.redirect("/admin");
    return;
  }

  authors.push({
    id: authors.at(-1)?.id + 1 || 1,
    fullName,
  });

  writeFile("authors", authors);
  res.redirect("/admin");
};

module.exports = {
  createAuthor,
};
