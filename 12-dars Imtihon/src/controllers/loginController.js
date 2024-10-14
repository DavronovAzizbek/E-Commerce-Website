const { readFile } = require("../utils/fs");
const { sign } = require("../utils/token");

const getLogin = (req, res) => {
  res.render("login");
};

const postLogin = (req, res) => {
  let admins = readFile("admins");
  let { username, password } = req.body;
  let findAdmin = admins.find(
    (admin) => admin.username === username && admin.password === password
  );

  if (findAdmin) {
    let token = sign({ id: findAdmin.id });
    res.cookie("secretKey", token);
    res.redirect("/admin");
  } else {
    res.redirect("/login");
  }
};

module.exports = {
  getLogin,
  postLogin,
};
