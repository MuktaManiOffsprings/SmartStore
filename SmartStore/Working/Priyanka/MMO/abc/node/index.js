const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth-routes");
const app = express();
const mongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://smartuser:smartuser@mmo.44t55vn.mongodb.net/test';
const db_name = 'SmartStore';
const collection_name = 'Category';

async function validate(){
  console.log("Validate is reached");
  /*const client = new mongoClient(uri);
  const db = client.db(db_name);
  const collection = db.collection(collection_name);
  client.connect();
  let data=collection.find({}).toArray();
  console.log(data);*/
}

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

app.use("/auth", authRoute);
app.use("/validate", authRoute);


app.listen("5000", () => {
  console.log("Server is running!");
});

module.exports = {validate};