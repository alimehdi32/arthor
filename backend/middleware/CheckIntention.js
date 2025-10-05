const { SegregateIntention } = require("../helper/SegregateIntention");

exports.CheckIntention = async (req, res, next) => {
    try {
        const intention = await SegregateIntention(req.body.prompt);
    console.log('Intention:', intention.choices[0].message.content);
    

    switch (intention.choices[0].message.content) {
        case 'generate':
            return next();
        case 'query':
            return next();
        case 'Question':
            return res.status(400).json({
                success: false,
                message: 'Question',
            });
        case 'Irrelevant':
            return res.status(401).json({
                success: false,
                message: 'Irrevelant',
            });
        case 'uncertain':
            return res.status(402).json({
                success: false,
                message: 'uncertain',
            });
        default:
            return res.status(403).json({
                success: false,
                message: 'Could not segregate prompt',
            });
    }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'something went wrong',
            error: error.message
        })
    }
    
}