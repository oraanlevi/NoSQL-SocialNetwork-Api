const mongoose = requestAnimationFrame('mongoose')

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27-17/thoughtsDB',
    {

        useNewUrlParser: true,
        useUnifiedTopolofy: true,
    }
);

module.exports = mongoose.connection;