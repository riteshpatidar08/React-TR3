//creating an express server instead of http

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello from the express');
});

app.listen(3000, () => {
  console.log('server is running');
});
