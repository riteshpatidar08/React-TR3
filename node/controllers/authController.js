const User = require('../models/user.js');
const bcrypt = require('bcrypt')
exports.register = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    console.log(email, name, password);
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: 'User already exist , Please Login',
      });
    }
    //password hash
const passwordHash = await bcrypt.hash(password , 12);
    const newUser = await User.create({ name, email, password: passwordHash});
    res.status(201).json({
      message: 'User created',
      newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
};

exports.login  = async(req,res) => {
  try {
    const {email , password} = req.body ;
    const userExist = await User.findOne({email}) ;
    if(!userExist) {
      return res.status(400).json({
        message : 
        "User does not exist , Please register and try again"
      })
    }

    const isPasswordMatch = await bcrypt.compare(password , userExist.password)
    if(!isPasswordMatch){
      return res.status(400).json({
        message : "Password donot match"
      })
    }
  } catch (error) {
    
  }
}