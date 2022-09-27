const router = require("express").Router();
const Address = require("../models/address");
const verifyToken = require("../routes/verifyToken");

router.post("/", verifyToken, async (req, res) => {
  const newAddress = new Address(req.body);

  try {
    if (req.user && req.body.Address !== "" && req.body.Address !== null) {
      const savedAddress = await newAddress.save();
      res.status(200).json(savedAddress);
    } else {
      res.status(400).json("Not authenticated");
    }
  } catch (err) {
    res.status(500).json("enter valid address");
  }
});

module.exports = router;
