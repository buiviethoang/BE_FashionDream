const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const authRoute = require("./src/routes/auth.js");
const userRoute = require("./src/routes/user.js");
const productRoute = require("./src/routes/product");
const paymentCardRoute = require("./src/routes/paymentcard");
const cors = require("cors");


mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected to DB"))
  .catch((err) => {
    console.log(err);
  });

// middlewares
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/product", productRoute);
app.use("/api/paymentcard", paymentCardRoute);

app.listen(process.env.PORT || 8000, () => {
  console.log("Connected!");
});
