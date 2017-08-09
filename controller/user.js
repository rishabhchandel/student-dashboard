'use-strict'
let mongoose = require('mongoose'),
    User = mongoose.model('User');

exports.route = function(pubRoute, securedRoute, adminRoute) {
    pubRoute.post('/signup', signUp);
    // pubRoute.post('/signup', signIn);
    //
    // securedRoute.get('/profile', getProfile);
    // securedRoute.put('/profile', updateprofile);
    // securedRoute.delete('/delete', deleteProfile);
    //
    // securedRoute.get('/otp', getOTP);
    // securedRoute.get('/verifyOtp', verifyOTP);
    // securedRoute.put('/forgetPasswd', forgetPassword);
    // securedRoute.put('/resetPasswd', resetPassword);

    pubRoute.get('/users', getAllUsers);
}

async function getAllUsers(req, res) {
    try {
        console.log(req.url);
        var data = await User.find({}, {
            email: 1,
            _id: 0
        });
        res.send(data);
    } catch (e) {
        console.log(e.message);
    } finally {}
}

async function signUp(req, res) {
    try {
        if (!req.body.name) {
            res.send("Please send user name")
        }
        console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq', req.body);

        await new User(req.body).save()
        res.send('Succesfully signup');
    } catch (e) {
        console.log(e.message);
    } finally {}
}
