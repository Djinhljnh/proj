const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(cors());

const users = [];

/*app.post("/api/users", (req, res) => {
  const user = req.body;
  users.push(user);
  res.json(user);
});*/

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
