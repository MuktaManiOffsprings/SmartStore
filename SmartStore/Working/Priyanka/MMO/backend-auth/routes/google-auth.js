const express = require('express');
const router = express.Router();
const passport = require("passport");
//const passportSetup = require("../passport");
const CLIENT_URL = "http://localhost:3000/";


router.get("/", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

module.exports = router;
