// ========== PACKAGES ========== \\
import mongoose from 'mongoose'

import 'dotenv/config'

const uri = process.env.MONGOOSE_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(`${uri}`)
        console.log("mongoDB Connected!")
    } catch (error) {
        console.log("MongoDB connection error: ", error);
        process.exit(1)
    }
}

export default connectDB;