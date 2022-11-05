require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let port = process.env.PORT || 3001;
app.listen(port);
console.log(`Listening at http://localhost:${port}`);