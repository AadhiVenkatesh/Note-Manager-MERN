const express = require("express");
const dotenv = require("dotenv");

const app = express();

app.get("/", (req, res) => {
  res.send("API is running..");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
