const PaymentCard = require("../models/PaymentCard");
const httpStatus = require("../utils/httpStatus");
const router = require("express").Router();
// CREATE
router.post("/create", async (req, res) => {
  const newCard = new PaymentCard({
    cardNumber: req.body.cardNumber,
    holderName: req.body.holderName,
    exp: req.body.exp,
    cvv: req.body.cvv,
    isDefault: req.body.isDefault,
  });
  try {
    const savedCard = await newCard.save();
    return res.status(httpStatus.CREATED).json(savedCard);
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error);
  }
});

module.exports = router;
