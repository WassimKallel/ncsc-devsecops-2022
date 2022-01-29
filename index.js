const express = require("express");
const app = express();
const port = const port = process.env.PORT || 3000;


app.get("/", (req, res) => {
  res.statusCode = 200;
  res.send("Hello World!");
});

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = server;
