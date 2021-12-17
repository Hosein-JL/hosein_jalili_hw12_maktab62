const path = require("path");

module.exports = (req, res, next) => {
  res.render(path.join("pages", "register.ejs"), {
    active: "register",
    title: "Register",
  });
};
