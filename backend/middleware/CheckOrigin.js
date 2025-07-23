const ALLOWED_ORIGINS = ['yourdomain', 'http://localhost:3000'];

exports.checkOrigin = (req, res, next) => {
    const origin = req.get('Origin') || req.get('Referer');
    console.log('Request Origin:', origin); // Log the origin for debugging
    if (!origin) {
        return res.status(400).json({ message: 'Missing origin' });
    }

    const isValidOrigin = ALLOWED_ORIGINS.some((allowed) => origin.startsWith(allowed));

    if (!isValidOrigin) {
        return res.status(403).json({ message: 'Invalid request origin' });
    }

    next();
}