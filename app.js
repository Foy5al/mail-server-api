const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json());

/* const mailSendRoute = require('') */

app.get("/", (req, res) => {
  res.send(`
   <h1>Welcome to email server</h1>
   `);
});
