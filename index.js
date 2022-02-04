const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const sanitizer = require("sanitizer")

var entries = [];
app.get("/", (request, response) => {
  const html = `
    <html>
        <body>
            <form action="/store" method="get">
                <label>Enter your text</label>
                <input type="text" name="value"></input>
                <input type="submit" name="submit"></input>
            </form>
            <ul>
                ${entries.map((value) => "<li>" + value + "</li>").join('')}
            </ul>
        </body>
    </html>
    `;
  console.log("getting");
  response.setHeader("ContentType", "text/html");
  // response.setHeader("Content-Security-Policy", "default-src 'self'");
  response.send(html);
});

app.get("/store", (request, response) => {
  let body = request.query;
  const value = body.value;
  console.log("storing");
  entries.push(sanitizer.escape(value));
  response.redirect("/");
});

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = server;
