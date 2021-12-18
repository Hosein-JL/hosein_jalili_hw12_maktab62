const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;
const errPage = "Not found...!";

const homeRouter = require(path.join(__dirname, "routes", "home.js"));
const contactRouter = require(path.join(__dirname, "routes", "contact.js"));
const aboutRouter = require(path.join(__dirname, "routes", "about.js"));
const productRouter = require(path.join(__dirname, "routes", "product.js"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/", homeRouter);
app.use("/about", aboutRouter);
app.use("/contact", contactRouter);
app.use("/product", productRouter);

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
