const router = require("express").Router();
const localAuthController = require("../local-auth/local-auth-controller");
const jwt = require("../jwt/jwtAuthServer");

router.post("/validate", localAuthController.validate);
router.post("/validateWithOTP", jwt.authenticateToken, localAuthController.validateWithOTP);


module.exports = router