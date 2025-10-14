const express = require('express') ;
const router = express.Router() ;

router.get('/orders' ,(req,res)=>{
    res.send('order coming from the routes file')
})

module.exports = router