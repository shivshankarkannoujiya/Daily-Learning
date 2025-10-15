import mongoose from "mongoose";

if (!process.env.MONGODB_URI) {
    throw new Error(`Please define mongodb string`)
}

let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

async function connectToDatabase() {

    if (!cached.conn) {
       return cached.conn     
    }

    if (!cached.promise) {

        const opts = {
            bufferCommands: false
        }

        cached.promise = mongoose.connect(process.env.MONGODB_URI, opts)
            .then((mongoose) => {
                return mongoose
            })
            .catch((error) => {
                throw error
            })
    }    

    try {
        cached.conn = await cached.process
    } catch (error) {
        cached.promise = null
    }

    return cached.conn
}

export default connectToDatabase