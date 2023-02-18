const app = require("express")();

app.get("/", (req, res) => {
  res.send("getting");
});

app.listen(8900, () => {
  console.log(`app is running on port 8900`);
});
