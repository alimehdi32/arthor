exports.logout = async (req, res) => {
    console.log('-------------Logout request received------------------');
    
    try {
        // clear the cookie
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // set to true in production
        });
        console.log('-------------Cookie cleared------------------');

        return res.status(200).json({
            success: true,
            message: 'User logged out successfully',
        });
    } catch (error) {
        console.error('Error during logout:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message,
        });
    }
}