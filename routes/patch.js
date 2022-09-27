const router = require("express").Router();
const verifyToken = require("../routes/verifyToken");
const jsonpatch = require("jsonpatch");
router.post("/", verifyToken, (req, res) => {
  patcheddoc = jsonpatch.apply_patch(req.body.mydoc, req.body.thepatch);
  try {
    if (patcheddoc) {
      res.status(200).json(patcheddoc);
    }
  } catch (err) {
    console.log(err);
  }

  console.log(req.body.thepatch);
});

module.exports = router;
