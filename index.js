const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const authRoute = require("./src/routes/auth.js");
const userRoute = require("./src/routes/user.js");
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected to DB"))
  .catch((err) => {
    console.log(err);
  });

// middlewares
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(process.env.PORT || 8000, () => {
  console.log("Connected!");
});
