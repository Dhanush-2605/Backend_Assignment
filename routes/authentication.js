const router = require("express").Router();

const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  console.log(req.body);

  try {
    if (
      req.body.username !== "" &&
      req.body.password !== "" &&
      req.body.user !== null &&
      req.body.password != null
    ) {
      let payload = {
        user: {
          id: req.username,
        },
      };

      let accessToken = jwt.sign(payload, process.env.JWT_SEC, {
        expiresIn: "1d",
      });
      if (accessToken) {
        res.status(200).json({ accessToken });
      } else {
        res.status(400).json("token no generated");
      }
    } else {
      res.status(400).json("Enter all credentials");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
