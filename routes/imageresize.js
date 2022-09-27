const router = require("express").Router();
const verifyToken = require("../routes/verifyToken");

var Jimp = require("jimp");

router.post("/", verifyToken, async (req, res) => {
  const imgURL = req.body.img;

  try {
    if (req.user && imgURL){
    Jimp.read(imgURL, function (err, img) {
      if (err) throw err;
      img.resize(50, 50).getBase64(Jimp.AUTO, function (e, img64) {
        if (e) throw e;
        res.send('<img src="' + img64 + '">');
      });
    });
}
else{
    res.status(400).json("Not Authenticated");
}
  } catch (err) {
    res.status(500).send(err);
  }

  
});
module.exports = router;
