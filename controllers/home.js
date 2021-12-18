const path = require("path");
const shoesData = require(path.join(
  path.dirname(__dirname),
  "models",
  "shoes.json"
));

module.exports = (req, res, next) => {
  console.log(req.query.search)
  let homeData = {
    active: "home",
    title: "Home",
  };

  if (req.query.search) {
    let searchKeys = req.query.search.split(/\s+/g);
    filteredShoes = filterShoes(searchKeys);
    homeData.shoes = filteredShoes;
  } else {
    homeData.shoes = shoesData;
  }

  // console.log(homeData);
  res.render(path.join("pages", "home.ejs"), homeData);
};

const filterShoes = (searchKeys) => {
  let filteredShoes = [];
  searchKeys.forEach((key) => {
    if (key !== "") {
      filteredShoes = [
        ...new Set([
          ...filteredShoes,
          ...shoesData.filter((shoe) => {
            return (
              shoe.title.includes(key) ||
              shoe.color.includes(key) ||
              shoe.size.includes(key) ||
              shoe.material.includes(key) ||
              shoe.price.includes(key) ||
              shoe.description.includes(key)
            );
          }),
        ]),
      ];
    }
  });
  return filteredShoes;
};
