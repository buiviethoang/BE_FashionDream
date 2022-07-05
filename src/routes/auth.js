const User = require("../models/User");
const Crypto = require("crypto-js");
const router = require("express").Router();
const jwt = require("jsonwebtoken");
//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: Crypto.AES.encrypt(
      req.body.password,
      process.env.PASS_KEY
    ).toString(),
  });  
  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const searchedUser = await User.findOne({ username: req.body.username });
    !searchedUser && res.status(401).json("Wrong credentials!");
    hashedPassword = Crypto.AES.decrypt(
      searchedUser.password,
      process.env.PASS_KEY
    );
    originalPassword = hashedPassword.toString(Crypto.enc.Utf8);
    originalPassword !== req.body.password &&
      res.status(401).json("Wrong credentials!");
    const { password, ...others } = searchedUser._doc;
    const accessToken = jwt.sign(
      {
        id: searchedUser._id,
        isAdmin: searchedUser.isAdmin,
      },
      process.env.JWT_KEY,
      { expiresIn: "2d" }
    );
    res.status(200).json({ ...others, accessToken });
  } catch (error) {
    // res.status(500).json(error);
  }
});
module.exports = router;
