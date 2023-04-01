const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json());

/* const mailSendRoute = require('') */
const mailSendRoute = require("./Routes/v1/mailSent.route");
app.use("/api/v1/drop", mailSendRoute);

app.get("/", (req, res) => {
  res.send(`
   <center><h1>Welcome to email server</h1></center>
   `);
});

module.exports = app;
