const router = require("express").Router();

const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  console.log(req.body.username);
  console.log(process.env.JWT_SEC);
  try {
    let accessToken = jwt.sign(
      {
        id: req.username,
      },
      process.env.JWT_SEC,
      { expiresIn: "1d" }
    );

    res.status(200).json({ accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
