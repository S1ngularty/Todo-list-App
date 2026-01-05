const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    if (!req.headers.authorization) throw new Error("Unauthorized Access");
    const authorization = String(req.headers.authorization).split(" ")[1] || "";
    if (authorization) throw new Error("Unauthorized Access");
    const payload = jwt.verify(authorization, process.env.JWT_SECRET);
    res.user = payload;
    next();
  } catch (error) {
    console.log(error.message);
    return res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { verifyToken };
