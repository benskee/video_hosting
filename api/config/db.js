const mongoose = require('mongoose')
require('dotenv').config()
const db = process.env.MONGOURI

const connectDB = async () => {
    try {
        await mongoose.connect(db)

        console.log('MongoDB Connected...')
    } catch (err) {
        console.error(err.message)
        process.exit(1)
    }
}

module.exports = connectDB