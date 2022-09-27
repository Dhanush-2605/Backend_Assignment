const router = require("express").Router();
const Address = require("../models/address");
const verifyToken = require("../routes/verifyToken");

router.post("/", verifyToken, async (req, res) => {
  console.log(req.body);
  const newAddress = new Address(req.body);

  try {
    const savedAddress = await newAddress.save();
    res.status(200).json(savedAddress);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
