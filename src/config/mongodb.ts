import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()
const mongoDBURL = process.env.MONGODB_URL as string
export default (async ()=>{
    try{
        await mongoose.connect(mongoDBURL)
        console.log('MongoDB Connected!')
    }catch(err){
        console.log('Error :>>', err)
        process.exit(1)
    }
})();