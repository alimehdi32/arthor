const jwt = require('jsonwebtoken');

exports.auth = async (req, res, next) => {
    const token = req.cookies.token; // getting token from cookies

    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'You are not authenticated',
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('-----------------------Decoded token:', decoded); // logging decoded token for debugging
        req.user = decoded; // attaching user info to request object
        next(); // proceed to the next middleware or route handler
    } catch (error) {
        return res.status(403).json({
            success: false,
            message: 'Invalid token',
            error: error.message,
        });
    }
}