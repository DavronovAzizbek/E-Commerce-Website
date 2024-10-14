const logout = (req, res) => {
  res.clearCookie("secretKey");
  res.redirect("/login");
};

module.exports = {
  logout,
};
