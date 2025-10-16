const User = require('../models/user.js')

exports.createUser  = async (req,res) => {
    try {
      const {name , email ,age} = req.body ;
      const userExist = await User.findOne({email}) ;
      if(userExist){
        res.status(400).json({
            message : "user already exist"
        })
      }
      const user = await  User.create({name , email ,age})
      if(!user){
        res.status(404).json({
            message : 
            "failed"
        })
      }
      res.status(201).json({
        message : "New user created",
        user
      })
    } catch (error) {
        
    }
}

exports.getAllUser = async(req,res) => {
    try {
        const user = await User.find() ;
        if(user.length <= 0){
            res.status(404).json({
                message : "No user found"
            })
        }
        res.status(200).json({
            user
        })
    } catch (error) {
    
  }
}