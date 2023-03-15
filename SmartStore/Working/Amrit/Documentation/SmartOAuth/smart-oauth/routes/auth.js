const router = require("express").Router();

const gauth = require("./google-auth");
const lauth = require("./local-auth");

router.use("/google", gauth);

router.use("/local", lauth);

router.get("/login/failed", (req, res) => {
    res.status(401).json({
        success: false,
        message: "failure",
    });
});

router.get("/login/success", (req, res) => {
    console.log("You have reached")
    //if (req.user) {
    //    res.status(200).json({
    //        success: true,
    //        message: "sucessfull",
    //        user: req.user,
    //    });

    //}
});

module.exports = router