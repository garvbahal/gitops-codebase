import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello... This is v2... Checking");
});

app.listen(3000, () => {
  console.log("Server is started at 3000 port");
});
