const ALLOWED_ORIGINS = ['yourdomain', 'http://localhost:3000', 'localhost:5000'];

exports.checkOrigin = (req, res, next) => {
    const origin = req.get('Origin') || req.get('Referer');
    console.log('Request Origin:', origin); // Log the origin for debugging
    // If no origin header is present, allow the request (typical for Postman, curl, etc.)
    if (!origin) {
        console.log('No Origin or Referer header found. Allowing request.');
        return next(); // Allow the request to proceed
    }


    const isValidOrigin = ALLOWED_ORIGINS.some((allowed) => origin.startsWith(allowed));

    if (!isValidOrigin) {
        return res.status(403).json({ message: 'Invalid request origin' });
    }

    next();
}