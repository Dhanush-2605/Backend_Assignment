const router = require("express").Router();
const verifyToken = require("../routes/verifyToken");
const jsonpatch = require("jsonpatch");
router.post("/", verifyToken, (req, res) => {
  patcheddoc = jsonpatch.apply_patch(req.body.mydoc, req.body.thepatch);
  try {
    if (patcheddoc && req.user) {
      res.status(200).json(patcheddoc);
    } else {
      res.status(400).json("Not Authenticated");
    }
  } catch (err) {
    console.log(err);
  }

  console.log(req.body.thepatch);
});

module.exports = router;
