const express = require('express') ;
const app = express() ;

const PORT = 8000 ;

//NOTE MIDDLEWARES 
// middleware are the functions in the express which have access to the req,res and next middleware function  , middleware can run any code and  access request and response object and modify them, then this modification on the req  can be available for next middleware in the req-res cylce.




app.listen(PORT , ()=>{
    console.log(`server is running on ${PORT}`)
})