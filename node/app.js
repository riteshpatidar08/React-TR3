//creating an express server instead of http

const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', (req, res) => {
  res.send('hello from the express');
});
//implementing crud operation using express
//NOTE GET ALL NEWS :
app.get('/news', (req, res) => {
  fs.readFile('news.json', 'utf-8', (err, data) => {
    if (data) {
      // res.status(200).send(data)
      res.status(200).json({
        message: 'success',
        length: JSON.parse(data).length,
        data,
      });
    } else {
      res.status(500).send(err);
    }
  });
});
//get single news 
app.get('/news/:id' , (req,res)=>{
    console.log(req.params.id)
})

app.listen(3000, () => {
  console.log('server is running');
});
