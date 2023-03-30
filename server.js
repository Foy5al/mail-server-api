const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = require("./app");

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database is Connected");
  });

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Email Server is listening....");
});
