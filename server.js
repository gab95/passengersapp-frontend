var express = require("express");

var app = express();

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
console.log("DIST+DIR", distDir);
app.use(express.static(distDir));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Server is listening on Port:", PORT);
});
