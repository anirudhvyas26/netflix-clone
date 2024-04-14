const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const jwt = require("jsonwebtoken");
const User = require("./models/User");
const userRoute = require("./routes/users");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection is successful"))
  .catch((err) => console.log(err));
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.listen(8800, () => {
  console.log("Backend server is running");
});
