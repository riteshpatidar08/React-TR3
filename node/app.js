const express = require('express') ;
const mongoose = require('mongoose')
const app = express() ;

const connectDB = async()=>{
    try {
        const connection = await mongoose.connect('mongodb://127.0.0.1:27017/mongodbTR3')
        console.log('CONNECTION SUCCESSFULL')
    } catch (error) {
        console.log(error)
    }
}

connectDB()


app.listen(3000,()=>{
    console.log('server is running on 3000')
})