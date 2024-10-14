const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const router = require("./routes");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(9000, () => {
  console.log(9000);
});
