const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {

  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "home.html" : req.url
  );

  let extname = path.extname(filePath);

  let contentType = "text/html";

  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;

    case ".css":
      contentType = "text/css";
      break;
    case ".jpg":
      contentType = "text/jpg";
      break;

    case ".png":
      contentType = "text/png";
      break;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        // Page not found
        fs.readFile(path.join(__dirname, "public", "404.html"), (err, data) => {
          if (err) throw err;

          res.writeHead(404, {
            "Content-Type": "text/html",
          });

          res.end(data);
        });
      } else {
        res.writeHead(500, { //majilan chre7 hadi 
          "Content-Type": "text/html",  
        });

        res.end("<h1>Server Error</h1>");
      }
    } else {
      res.writeHead(200, {
        "Content-Type": contentType,
      });

      res.end(data);
    }
  });
});

const PORT = process.env.PORT ?? 9990;

server.listen(PORT, () => console.log("Server is running"));

