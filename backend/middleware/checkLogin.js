exports.checkLogin = async (req, res, next) => {
    const token = req.cookies.token; // getting token from cookies

     if( token ) next();

     return res.status(403).json({
            success: false,
            message: 'You are not logged in',
        });
}