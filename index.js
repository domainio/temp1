const express = require("express");

const app = express();
const port = process.env.PORT || 8080;

console.log("osher hamelech!");

app.get("/", async (req, res) => {
  res.json({ status: "all is fine" });
});



const now = new Date().toString();

app.get("/time", async (req, res) => {
  res.json({ time: now });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});