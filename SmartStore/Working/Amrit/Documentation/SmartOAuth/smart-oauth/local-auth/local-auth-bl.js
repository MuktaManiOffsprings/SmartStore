const localAuthDAL = require('./local-auth-dal');
const speakeasy = require('speakeasy');
const nodemailer = require('nodemailer');

//const jwt = require('../jwt/jwt');
const jwt = require('../jwt/jwtAuthServer');

const transporter = nodemailer.createTransport({
    //host: 'smtp.live.com',
    host: 'smtp-mail.outlook.com',
    port: '587',
    secure: false,
    auth: {
        user: 'mmo.org@hotmail.com',
        pass: 'MuktaManiOffsprings@7'
    }
})

async function validate(user) {
    try {
        let data = await localAuthDAL.getUserDetails(user);

        if (data[0].password == user.password) {
            //Implement 2FA
            const secretKey = speakeasy.generateSecret({ length: 8 });

            await localAuthDAL.updateUserOTP(user.email, secretKey);

            const mailOptions = {
                from: 'mmo.org@hotmail.com',
                to: user.email,
                subject: 'OTP for login',
                text: `OTP is ${secretKey.ascii}`
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            })

            var info = {
                username: user.email,
                email: user.email,
                type: 'localOTP'
            }
            //let accessToken = jwt.generateToken("localOTP")
            let accessToken = jwt.generateAccessToken(info)
            return { success: true, accessToken: accessToken, message: '' };
        }
        else {
            return { success: false, accessToken: null, message: 'Invalid Username and Password combination.' };
        }
    }
    catch (err) {
        return { success: false, accessToken: null, message: err }
    }
}

async function validateWithOTP(user) {
    //let isValidated = jwt.validateToken(user.token);

    //if (isValidated) {
    //    let data = await localAuthDAL.getUserDetails(user);

    //    if (data[0].otp.ascii == user.otp) {
    //        let token = jwt.generateToken("localJWT");
    //        return { success: true, token: token };
    //    }
    //    else {
    //        return { success: false, token: null };
    //    }
    //}
    //else {
    //    return { success: false, token: null }
    //}

    let data = await localAuthDAL.getUserDetails(user);

    if (data[0].otp.ascii == user.otp) {
        var info = {
            username: data.email,
            email: data.email,
            type: 'localAuth'
        }
        let accessToken = jwt.generateAccessToken(info);
        return { success: true, accessToken: accessToken };
    }
    else {
        return { success: false, accessToken: null };
    }
}

module.exports = {
    validate: validate,
    validateWithOTP: validateWithOTP
};