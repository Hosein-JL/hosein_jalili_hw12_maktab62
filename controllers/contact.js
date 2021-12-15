const path = require("path");

module.exports = (req, res, next) => {
  res.render(path.join("pages", "contact.ejs"), {
    active: "contact",
    title: "Contact",
  });
};
