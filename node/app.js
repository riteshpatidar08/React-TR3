const express = require('express');
const app = express();

const PORT = 8000;

//NOTE MIDDLEWARES
//NOTE => Middleware Are The Functions In The express which have access to the req,res and next middleware function  , middleware can run any code and  access request and response object and modify them, then this modification on the req  can be available for next middleware in the req-res cylce.
app.use((req, res, next) => {
  console.log('middleware first is running');
  next()
});
app.use((req,res,next)=>{
    console.log('middleware 2 is running')
    next()
})

app.get('/health', (req, res) => {
  res.send('running');
});

app.post('/name', (req,res)=>{
    console.log(req.body)
})

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
