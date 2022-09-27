const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.token;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    console.log(token);
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) res.status(401).json(err);
      req.user = user;
      next();
    });
  } else {
    res.status(401).json("you are not authenticated!");
  }
};

module.exports = verifyToken;
