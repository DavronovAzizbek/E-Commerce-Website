const { readFile, writeFile } = require("../utils/fs");

const getOrder = (req, res) => {
  let books = readFile("books");
  let { id } = req.params;
  let book = books.find((el) => el.id === id * 1);

  if (book) {
    res.render("shopping", { book });
  } else {
    res.redirect("/error");
  }
};

const createOrder = (req, res) => {
  let orders = readFile("order");
  let books = readFile("books");
  let { bookId, clientName, clientPhone, count, address } = req.body;
  let findBook = books.find((el) => el.id === bookId * 1);

  if (findBook) {
    orders.push({
      id: orders.at(-1)?.id + 1 || 1,
      bookId,
      clientName,
      clientPhone,
      count,
      address,
      totalPrice: findBook.price * count,
    });
    writeFile("order", orders);
    res.redirect("/");
  } else {
    res.redirect("/");
  }
};

module.exports = {
  getOrder,
  createOrder,
};
