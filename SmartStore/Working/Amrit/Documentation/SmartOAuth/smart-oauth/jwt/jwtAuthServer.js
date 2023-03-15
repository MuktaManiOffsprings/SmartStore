require('dotenv').config();
const jwt = require('jsonwebtoken');

function generateAccessToken(data) {
    var payload = {};

    if (data.type == 'localOTP') {
        payload = {
            username: data.username,
            email: data.email,
            type: 'localAuth',
            authName: 'lOtpAuth'
        }
    }
    else if (data.type == 'localJWT') {
        payload = {
            username: data.username,
            email: data.email,
            type: 'local Authentication',
            authName: 'lAuth'
        }
    }
    else {
        payload = {
            username: data.username,
            email: data.email,
            type: '3rd Party Authentication',
            authName: 'gAuth'
        }
    }

    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
}

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401)
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        console.log(user)
        res.user = user;
        next();
    })
}

module.exports = {
    generateAccessToken: generateAccessToken,
    authenticateToken: authenticateToken
}