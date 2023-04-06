const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors");
//const axios = require("axios");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// get api
app.get("/api/users", (req, res) => {
  const db = JSON.parse(fs.readFileSync("./db.json"));
  res.send(db);
});

// connect api register
app.post("/api/users", (req, res) => {
  const db = JSON.parse(fs.readFileSync("./db.json"));
  const { username, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({
      message: "Passwords do not match",
    });
  }

  const existingUser = db.find((user) => user.username === username);
  if (existingUser) {
    return res.status(400).json({
      message: "Username already exists",
    });
  }

  const newUser = {
    username,
    password,
  };

  db.push(newUser);
  fs.writeFileSync("./db.json", JSON.stringify(db));

  res.send(newUser);
});

// connect api login
app.post("/api/login", (req, res) => {
  const db = JSON.parse(fs.readFileSync("./db.json"));
  const { username, password } = req.body;
  const user = db.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    res.send(user);
  } else {
    res.status(401).json({
      message: "Username or password is incorrect",
    });
  }
});

app.listen(3001, () => {
  console.log("listening on port 3001 ");
});

/*const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// get api
app.get("/api/users", (req, res) => {
  const db = JSON.parse(fs.readFileSync("./db.json"));
  res.send(db);
});

// connect api register
app.post("/api/users", (req, res) => {
  const db = JSON.parse(fs.readFileSync("./db.json"));
  const { username, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({
      message: "Passwords do not match",
    });
  }

  const existingUser = db.find((user) => user.username === username);
  if (existingUser) {
    return res.status(400).json({
      message: "Username already exists",
    });
  }

  const newUser = {
    username,
    password,
    confirmPassword,
  };

  db.push(newUser);
  fs.writeFileSync("./db.json", JSON.stringify(db));

  res.send(newUser);
});

// connect api login
app.post("/api/login", (req, res) => {
  const db = JSON.parse(fs.readFileSync("./db.json"));
  const { username, password } = req.body;
  const user = db.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    res.send(user);
  } else {
    res.status(401).json({
      message: "Username or password is incorrect",
    });
  }
});

app.listen(3001, () => {
  console.log("listening on port 3001 ");
});
*/
