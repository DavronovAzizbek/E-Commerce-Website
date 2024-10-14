const jwt = require("jsonwebtoken");

function sign(payload) {
  return jwt.sign(payload, "Javascript");
}

function verify(token) {
  return jwt.verify(token, "Javascript");
}

module.exports = {
  sign,
  verify,
};
