const Stock = require('../models/Stocks');


exports.CheckStock = async (req, res, next) => {
       const userStocks = await Stock.find({ Boughtby: req.user.id })
       
       if(userStocks.NoofStocks >= 3){
        next();
       }

       return res.status(405).json({
        success: false,
        message: "No Stock found"
       })

}