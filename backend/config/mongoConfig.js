const mongoose = require('mongoose');

const connectToMongoDB = async () => {
    const mongoURI = process.env.MONGO_URI ;

    await mongoose.connect(mongoURI, {
       
    })
    .then(() => {
        console.log(' ✅ MongoDB connected successfully');
    })
    .catch(err => {
        console.error(' ❌ MongoDB connection error:', err);
    });
}

module.exports = connectToMongoDB;