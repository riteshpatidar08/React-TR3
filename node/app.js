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
app.get('/news/:id', (req, res) => {
  const id = +req.params.id;
  console.log(typeof id);
  const data = fs.readFileSync('news.json', 'utf-8');
  const convertedData = JSON.parse(data);
  const singleNews = convertedData.find((d) => d.id === id);
  res.status(200).json({
    data: singleNews,
  });
});

//add a new article
app.post('/news', (req, res) => {
  console.log(req.body);
});



app.listen(3000, () => {
  console.log('server is running on 3000 port');
});
