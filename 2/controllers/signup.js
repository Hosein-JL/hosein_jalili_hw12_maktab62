const path = require("path");
const fs = require("fs");
const users = require(path.join(
  path.dirname(__dirname),
  "models",
  "users.json"
));

const getSignupPage = (req, res) => {
  res.render(path.join("pages", "signup.ejs"), {
    title: "Signup",
  });
};

const checkSignup = (req, res) => {
  console.log(req.body);
  if (
    users.find(
      (user) =>
        user.username === req.body.username && user.gender === req.body.gender
    )
  ) {
    return res.status(409).json({
      message: "The username already exists.",
    });
  }

  users.push(req.body);
  fs.writeFile(
    path.join(path.dirname(__dirname), "models", "users.json"),
    JSON.stringify(users),
    "utf8",
    (err) => {
      if (err) {
        return res.status(400).json({
          message: "Bad request.",
        });
      }
      res.status(200).json({
        message: "OK",
      });
    }
  );
};

module.exports = {
  getSignupPage,
  checkSignup,
};
