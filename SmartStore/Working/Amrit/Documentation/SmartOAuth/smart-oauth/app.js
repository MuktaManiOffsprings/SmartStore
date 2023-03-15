const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
require("./passport");
const cors = require("cors");

const authRoute = require("./routes/auth");

const app = express()

app.use(cookieSession({
    name: "session",
    keys: ["faith"],
    maxAge: 60 * 60 * 100
}));

app.use(passport.initialize());
app.use(passport.session());

//app.use(cors({
//    origin: "http://localhost:3000/",
//    methods: "GET, POST, PUT",
//    credentials: true
//}))

app.use(cors());
app.use(express.json());

app.use("/authorised", authRoute);

app.listen("5000", () => {
    console.log("Server is running!")
})