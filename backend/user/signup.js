const userModel = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signUp = async (req, res) => {
    const { name, email, username, password, role } = req.body;
    try {
        // checking if user already exists
        const existinguser = await userModel.findOne({
            email,
        })
        if (existinguser) {
            return res.status(400).json({
                success: false,
                message: 'User already exists',
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message,
        });
    }

    try {
        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // saving newUser to database
        const newUser = new userModel({
            name,
            email,
            username,
            password: hashedPassword,
            role: role || 'user', // default to 'user' if no role is provided
        });
        await newUser.save()
        console.log('New user created:', newUser);

        // generate JWT token
        const token = jwt.sign(
            { id: newUser._id, username: newUser.username, role: newUser.role },
            process.env.JWT_SECRET,
            { expiresIn: '1d' },
        )
        console.log('JWT token generated:', token);

        // set cookie with JWT token
        res.cookie('token', token, {
            httpOnly: true,
            secure: false,           // only true in HTTPS
            sameSite: 'Lax',         // or 'None' + HTTPS if frontend and backend are different origins
            maxAge: 24 * 60 * 60 * 1000, // 1 day
        });
        console.log('-------------Cookie set with JWT token------------------');

        return res.status(201).json({
            success: true,
            message: 'User created successfully',
        });
    } catch (error) {
        console.error('Error in signUp:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message,
        });
    }
}