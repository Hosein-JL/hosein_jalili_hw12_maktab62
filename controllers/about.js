const path = require("path");

module.exports = (req, res, next) => {
  res.render(path.join("pages", "about.ejs"), {
    active: "about",
    title: "About",
  });
};
