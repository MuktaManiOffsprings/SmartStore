const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth-routes");
const app = express();

app.use(express.json());
app.use(
  cookieSession({ name: "session", keys: ["pinky"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(cors());

app.use("/auth", authRoute);
///app.use("/validate", authRoute);


app.listen("5000", () => {
  console.log("Server is running!");
});
