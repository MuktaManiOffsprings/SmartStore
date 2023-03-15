const jwt = require('jsonwebtoken');

//const payload = { username: 'ad' };
//const jwtSecretKey = 'OnlyDeadFishGoWithTheFlow';
const jwtSecretKey = 'gfg_jwt_secret_key';
//const tokenHeaderKey = 'gfg_token_header_key';

function generateToken(type) {
    var token = '';
    var payload = {};

    if (type == 'localOTP') {
        console.log(payload);
        payload = { username: 'AD' }
        console.log(payload);
        token = jwt.sign(payload, jwtSecretKey, { expiresIn: '1h' });
    }
    else if (type == 'localJWT') {

    }

    return token;
}

function validateToken(req, res) {
    try {
        const verified = jwt.verify(req, jwtSecretKey);
        if (verified) {
            console.log("verified")
            return true;
        } else {
            console.log("unverified")
            // Access Denied
            return false;
        }

    } catch (error) {
        // Access Denied
        return false;
    }
}

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401)
    jwt.verify(token, jwtSecretKey, (err, user) => {
        if (err) return res.sendStatus(403)
        res.user = user;
        next();
    })
}

module.exports = {
    generateToken: generateToken,
    validateToken: validateToken,
    authenticateToken: authenticateToken
}