const { SegregateIntention } = require("../helper/SegregateIntention");

exports.CheckIntention = async (req, res, next) => {
    const intention = await SegregateIntention(req.body.prompt);
    console.log('Intention:', intention.choices[0].message.content);
    

    switch (intention.choices[0].message.content) {
        case 'generate':
            return next();
        case 'query':
            return next();
        case 'Question':
            return res.status(403).json({
                success: false,
                message: 'Question not allowed',
            });
        case 'Irrelevant':
            return res.status(403).json({
                success: false,
                message: 'Irrevelant prompt',
            });
        case 'uncertain':
            return res.status(403).json({
                success: false,
                message: 'Cannot understand prompt',
            });
        default:
            return res.status(403).json({
                success: false,
                message: 'Could not segregate prompt',
            });
    }
}