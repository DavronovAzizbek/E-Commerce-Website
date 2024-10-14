const { readFile, writeFile } = require("../utils/fs");

const createCategory = (req, res) => {
  let categories = readFile("categories");
  let { name } = req.body;
  let findCategories = categories.find((el) => el.name === name);

  if (findCategories) {
    res.redirect("/admin");
    return;
  }

  categories.push({
    id: categories.at(-1)?.id + 1 || 1,
    name,
  });

  writeFile("categories", categories);
  res.redirect("/admin");
};

module.exports = {
  createCategory,
};
