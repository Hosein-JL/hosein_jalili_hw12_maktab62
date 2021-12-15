const path = require("path");
const shoesData = require(path.join(
  path.dirname(__dirname),
  "models",
  "shoes.json"
));

module.exports = (req, res, next) => {
  let shoe = shoesData.find((shoe) => shoe.id === req.params.id);
  res.render(path.join("pages", "product.ejs"), {
    active: "product",
    title: "Product",
    shoe: shoe ? shoe : {},
  });
};
