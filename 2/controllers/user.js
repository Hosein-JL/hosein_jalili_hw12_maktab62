const path = require("path");
const fs = require("fs");

const users = require(path.join(
  path.dirname(__dirname),
  "models",
  "users.json"
));

const getUserPage = (req, res) => {
  const user = users.find((user) => user.username === req.params.username);
  if (user && user.isLoggedIn === "true") {
    res.render(path.join("pages", "user.ejs"), {
      title: "User",
      user,
    });
  } else {
    res.status(403).render(path.join("pages", "403.ejs"), {
      title: 403,
    });
  }
};

const logoutUser = (req, res) => {
  const userIndex = users.findIndex(
    (user) => user.username === req.params.username
  );
  if (userIndex >= 0) {
    users[userIndex].isLoggedIn = "false";
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
      message: "not found!",
    });
  }
};

const updateUser = (req, res) => {
  const userIndex = users.findIndex(
    (user) => user.username === req.body.lasUsername
  );
  if (userIndex >= 0) {
    users[userIndex].username = req.body.username;
    users[userIndex].fName = req.body.fName;
    users[userIndex].lName = req.body.lName;
    users[userIndex].password = req.body.password;
    users[userIndex].email = req.body.email;
    users[userIndex].gender = req.body.gender;
    users[userIndex].isLoggedIn = req.body.isLoggedIn;
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
      message: "User not found!",
    });
  }
};

module.exports = {
  getUserPage,
  logoutUser,
  updateUser,
};
