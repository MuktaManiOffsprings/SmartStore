const localAuthBl = require('./local-auth-bl');

async function validate(req, res) {
    let data = await localAuthBl.validate(req.body);
    if (data.success == true) {
        res.status(200).json({
            success: true,
            message: 'User Authenticated Partially.',
            data: {
                accessToken: data.accessToken
            }
        });
    } else {
        res.status(404).json({
            success: false,
            message: 'User not authenticated.',
            data: null
        });
    }
}

async function validateWithOTP(req, res) {
    let data = await localAuthBl.validateWithOTP(req.body);
    if (data.success == true) {
        res.status(200).json({
            success: true,
            message: 'User Authentication Completed.',
            data: {
                accessToken: data.accessToken
            }
        });
    } else {
        res.status(404).json({
            success: false,
            message: 'User not authenticated.',
            data: null
        });
    }
}

module.exports = {
    validate: validate,
    validateWithOTP: validateWithOTP
};