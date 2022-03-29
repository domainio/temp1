const express = require("express");

const app = express();
const port = process.env.PORT || 8080;

app.get("/", async (req, res) => {
  res.json({ status: "all is fine2" });
});

app.get("/time", async (req, res) => {
  res.json({ time: Date.toString() });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});