const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user');

exports.login = async (req, res) => {

    const { email, password } = req.body;
    console.log('-------------Login request received------------------');
    try {

        // check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(500).json({
                success: false,
                message: 'User does not exist',
            });
        }
        console.log('-------------User found------------------');

        const isMatched = await bcrypt.compare(password, user.password);
        if (!isMatched) {
            console.log('-------------Password mismatch------------------');
            return res.status(500).json({
                success: false,
                message: 'Invalid credentials',
            })
        }
        console.log('-------------Password matched------------------');

        // generate JWT token
        const token = jwt.sign(
            { id: user._id, username: user.username, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1d' },
        );
        console.log('-------------JWT token generated:------------------', token);

        // set cookie with JWT token
        res.cookie('token', token, {
            httpOnly: true,
            secure: false,           // only true in HTTPS
            sameSite: 'Lax',         // or 'None' + HTTPS if frontend and backend are different origins
            maxAge: 24 * 60 * 60 * 1000, // 1 day
        });
        console.log('-------------Cookie set with JWT token------------------');


        return res.status(200).json({
            success: true,
            message: 'User logged in successfully',
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message,
        });

    }
}