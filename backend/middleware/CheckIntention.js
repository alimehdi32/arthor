const { SegregateIntention } = require("../helper/SegregateIntention");

exports.CheckIntention = async (req, res, next) => {
    const intention = await SegregateIntention(req.body.prompt);
    console.log('Intention:', intention.choices[0].message.content);
    req.body.intention = intention.choices[0].message.content;

    if (req.body.intention) {
        return next(); // ✅ use return to exit the function
    }

    // Only runs if intention is missing
    return res.status(403).json({
        success: false,
        message: 'Intention not set',
    });
}