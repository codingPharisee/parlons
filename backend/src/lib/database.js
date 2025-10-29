import mongoose from "mongoose"
export const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("mongo db is connected:", conn.connection.host)
    }
    catch (error){
        console.error("error connecting to database:", error)
        Process.exit(1)
    }
}