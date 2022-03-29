const express = require('express');
console.log('my name is Yarin');

const app = express();
const port = process.env.PORT || 8080;

console.log("osher hamelech!");

app.get("/", async (req, res) => {
  res.json({ status: "food is ready" });
});



app.get("/time", async (req, res) => {
  const now = new Date().toString();
  res.json({ time: now });
});


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
