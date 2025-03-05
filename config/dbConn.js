const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        //const DATABASE_URI="mongodb://localhost:27017/tasksDB"
        await mongoose.connect(process.env.DATABASE_URI)
    } catch (err) {
        console.error("*****error connection to DB****\n" + err)
    }
}
module.exports = connectDB
