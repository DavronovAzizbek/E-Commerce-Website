const { readFile, writeFile } = require("../utils/fs");
const { verify } = require("../utils/token");

const verifyToken = (req, res, next) => {
  try {
    let admins = readFile("admins");
    let token = req.cookies.secretKey;

    if (!token) {
      res.redirect("/login");
    }

    let data = verify(token);
    let findAdmins = admins.find((el) => el.id === data.id);

    if (findAdmins) {
      next();
    } else {
      res.redirect("/login");
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = verifyToken;
