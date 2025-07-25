const Stock = require('../models/Stocks');

exports.InitialiseStock = async (req, res) => {
    const newStock = new Stock({
        Boughtby: req.user.id,
        NoofStocks: 6
    })
    await newStock.save();
    console.log('------------------------New stock created:', newStock);

    return res.status(200).json({
        success: true,
        message: "Stock initialised"
    })
}

exports.updateStocks = async (req, res) => {
    const { NoofStocks } = req.body;

    if (typeof NoofStocks !== 'number' || NoofStocks < 0) {
            return res.status(400).json({
                success: false,
                message: "NoofStocks must be a non-negative number."
            });
        }

    const updatedStock = await Stock.findOneAndUpdate(
        { Boughtby: req.user.id },
        { NoofStocks: NoofStocks },
        { new: true, runValidators: true }
    );

    if (!updatedStock) {
            // This means no stock entry was found for the given user ID
            return res.status(404).json({
                success: false,
                message: "No stock entry found for this user. Please initialise stock first."
            });
        }

    console.log('------------------------Stock updated:', updatedStock);

    return res.status(200).json({
        success: true,
        message: "Stock updated successfully",
        stock: updatedStock
    });
}