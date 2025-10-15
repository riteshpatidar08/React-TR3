const mongoose = require('mongoose')

//create schema for users 


//using the schema to create a model , we are going to use this model to write query
const userSchema = new mongoose.Schema({
name  : {type : String},
email : {type : String},
age : {type  : Number} ,
isActive : {type : Boolean, default : true},
isVerified : {type : Boolean , default : false}
})

const User = mongoose.model("user" , userSchema)
console.log(User)

module.exports = User