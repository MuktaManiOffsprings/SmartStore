const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://smartuser:smartuser@mmo.44t55vn.mongodb.net/test';
const db_name = 'SmartStore';
const collection_name = 'Users';
const collection_name1= 'Otp';
const nodemailer= require('nodemailer');
const crypto = require('crypto');

const client = new mongoClient(uri);
const db = client.db(db_name);
const collection = db.collection(collection_name);
const collection1= db.collection(collection_name1);
client.connect();


const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  port:'587',
  secure: false,
  auth: {
    user: 'mmo.org@hotmail.com',
    pass: 'MuktaManiOffsprings@7'
  }
});

async function validate(req, res){
  console.log("Validate is reached");
    const info = req.body;

    try{
      const saltRounds = 10; 
      const hashedPassword = await bcrypt.hash(info.Password, saltRounds);
      //await collection.insertOne({ username:info.Email, password: hashedPassword });

      //console.log('Password hashed and stored in database');
      const result =  await collection.findOne({username:info.Email});
      console.log(result);
      const storedHash = result.password;
      const enteredPassword = info.Password;
      const isMatch = await bcrypt.compare(enteredPassword, storedHash);
      if (isMatch) {
        const otp = crypto.randomInt(100000, 999999);
        console.log(otp);
        const hashedOtp = await bcrypt.hash(otp.toString(),saltRounds);
        console.log(hashedOtp);
        await collection1.insertOne({email:info.Email , otp:hashedOtp});

        const mailOptions = {
          from:"mmo.org@hotmail.com",
          to: "mmo.priyanka@hotmail.com",
          subject: "OTP for login",
          text: `OTP is ${otp}` 
        };
        transporter.sendMail(mailOptions,(error,info)=>{
          if(error){
              console.log(error);
          }
          else{
            console.log("Email sent:" + info.response);

          }
        })
        
    res.status(200).json({
      success: true,
      message: 'User Authenticated Partially.',
      data: token
  });   

      } 
      else {
          console.log("Password doesn't match");
          res.status(404).json({
            success: false,
            message: 'User not authenticated. Invalid Password',
            //data: null
        });
          
      }

    }
    catch(err){
      console.log("Connection Unsuccessful");
      //console.log(err);
      res.status(404).json({
        success: false,
        message: 'User not authenticated.Connection issue',
       // data: null
    });
      
    }
    console.log(res);
  }
async function validateOtp(req,res){
    const info = req.body;
    const result =  await collection1.findOne({username:info.Email});
}

  router.use("/",validate);
  router.use("/otpvalidation", validateOtp);

  module.exports= router;