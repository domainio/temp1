const express = require("express");

const app = express();
const port = process.env.PORT || 8080;

app.get("/", async (req, res) => {
  res.json({ status: "all is fine" });
});

app.get("/time", async (req, res) => {
  console.log("dudi... ")
  res.json({ time: Date.toString() });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});