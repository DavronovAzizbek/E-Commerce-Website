const { Router } = require("express");
const { getHome } = require("../controllers/homeController");
const { getOrder, createOrder } = require("../controllers/shoppingController");
const { createBook } = require("../controllers/booksController");
const { getError } = require("../controllers/errorController");
const { getAdmin } = require("../controllers/adminController");
const { createAuthor } = require("../controllers/authController");
const { createCategory } = require("../controllers/categoryController");
const { getLogin, postLogin } = require("../controllers/loginController");
const { logout } = require("../controllers/logoutController");
const verifyToken = require("../middlewares/verifyToken");
const router = Router();

router.get("/", getHome);
router.get("/order/:id", getOrder);
router.post("/order", createOrder);
router.get("/error", getError);
router.get("/login", getLogin);
router.post("/login", postLogin);
router.get("/admin", verifyToken, getAdmin);
router.post("/postAuthor", verifyToken, createAuthor);
router.post("/postCategory", verifyToken, createCategory);
router.post("/postBook", verifyToken, createBook);
router.get("/logout", logout);

module.exports = router;
