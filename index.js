const express = require('express');
console.log('my name is Yarin');

const app = express();
const port = process.env.PORT || 8080;

app.get("/", async (req, res) => {
  res.json({ status: "all is fine" });
});

console.log('dean')
console.log('halelik')
console.log('halelik')
console.log('halelik')

app.get('/time', async (req, res) => {
  res.json({ time: Date.toString() });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
