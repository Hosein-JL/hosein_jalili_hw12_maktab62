const path = require("path");

module.exports = (req, res, next) => {
  res.render(path.join("pages", "login.ejs"), {
    active: "login",
    title: "Login",
  });
};
