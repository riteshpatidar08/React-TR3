const express = require('express') ;
const app = express() ;
const orderRoutes = require('./routes/orderRoutes.js')


app.get('/', (req,res)=>{
    res.send("HOMEPAGE")
})

//RESOURCE = orders
app.get('/order', (req,res)=>{
    res.send("ALL ORDER")
})
//1st routes setup
app.use('/api',orderRoutes)

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})