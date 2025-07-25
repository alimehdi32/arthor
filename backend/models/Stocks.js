const mongoose = require('mongoose')

const StockSchema = new mongoose.Schema({
    Boughtby: {
        type: String,
        required: true,
    },
    NoofStocks: {
        type: Number,
        required: true,
        default: 6,
    }
})

module.exports = mongoose.model('Stock', StockSchema)