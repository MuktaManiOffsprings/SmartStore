const express = require('express');
const router = express.Router();
const app = express();
const passport = require("passport");
const localAuth= require("./local-auth");
const googleAuth = require("./google-auth");
const CLIENT_URL = "http://localhost:3000/";

router.use("/google", googleAuth);
router.use("/validate",localAuth);

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user
      //   cookies: req.cookies
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});



module.exports = router;