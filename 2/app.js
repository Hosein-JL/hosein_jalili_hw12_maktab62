const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;
const router = require("./routes/login");
const errPage = "Not found...!";

const loginRouter = require(path.join(__dirname, "routes", "login.js"));
const singupRouter = require(path.join(__dirname, "routes", "register.js"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/", loginRouter);
app.use("/register", singupRouter);

app.use(function (req, res) {
  res.status(404);
  // respond with html page
  if (req.accepts("html")) {
    res.sendfile("./public/img/404.jpg");
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

router.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).send(errPage);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
