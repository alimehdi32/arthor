exports.checkLogin = async (req, res, next) => {
    const token = req.cookies.token;
    console.log('Cookies:', req.cookies)
    console.log('Token:', token);

    if (token) {
        return next(); // ✅ use return to exit the function
    }

    // Only runs if token is missing
    return res.status(403).json({
        success: false,
        message: 'You are not logged in',
    });
};
