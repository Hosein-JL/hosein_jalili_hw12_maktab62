const path = require("path");
const fs = require("fs");

const users = require(path.join(
  path.dirname(__dirname),
  "models",
  "users.json"
));

const getLoginPage = (req, res) => {
  res.render(path.join("pages", "login.ejs"), {
    title: "Login",
  });
};

const checkLogin = (req, res) => {
  const userIndex = users.findIndex(
    (user) =>
      user.username === req.body.username && user.password === req.body.password
  );
  if (userIndex >= 0) {
    users[userIndex].isLoggedIn = "true";
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
        return res.status(200).json({
          message: "OK",
        });
      }
    );
  } else {
    return res.status(404).json({
      message:"Incorrect username or password ‼",
    });
  }
};

module.exports = {
  getLoginPage,
  checkLogin,
};
