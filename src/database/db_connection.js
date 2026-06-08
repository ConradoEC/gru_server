import mongoose from 'mongoose'

export default async() => {
    try {
        await mongoose.connect(String(process.env.CONNECTION_LINK))
        console.log("DB connected")
    }
    catch (error) {
        console.log(error)
    }
}