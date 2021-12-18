const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const PORT = 3000;

const loginRouter = require(path.join(__dirname, "routes", "login.js"));
const signupRouter = require(path.join(__dirname, "routes", "signup.js"));
const userRouter = require(path.join(__dirname, "routes", "user.js"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/signup", signupRouter);
app.use("/user", userRouter);
app.use("/", loginRouter);

app.use(function (req, res) {
  res.status(404);
  // respond with html page
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "./public/img/404.jpg"));
    return;
  }
  // respond with json
  if (req.accepts("json")) {
    res.send({ error: "Not found" });
    return;
  }
  // default to plain-text. send()
  res.type("txt").send("Not found");
});

//Error Handling 500

app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).send(errPage);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
