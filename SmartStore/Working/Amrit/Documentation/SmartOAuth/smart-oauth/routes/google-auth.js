const router = require("express").Router();
const passport = require("passport");

const CLIENT_URL = "http://localhost:3000/Landing";

router.get("/", passport.authenticate("google", { scope: ["profile"] }));

router.get("/callback", passport.authenticate("google", {
    //successRedirect: CLIENT_URL,
    successRedirect: "/login/success",
    failureRedirect: "/login/failed"
}));

module.exports = router